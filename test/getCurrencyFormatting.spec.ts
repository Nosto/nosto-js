import { getCurrencyFormatting } from "../src/lib/getCurrencyFormatting"
import { mockNostojs } from "../src/testing"
import { describe, expect, it, vi } from "vitest"

const currencyFormatsMock = {
  GBP: {
    currencyBeforeAmount: true,
    currencyToken: "£",
    decimalCharacter: ".",
    groupingSeparator: "",
    decimalPlaces: 1
  },
  EUR: {
    currencyBeforeAmount: true,
    currencyToken: "€",
    decimalCharacter: ",",
    groupingSeparator: ".",
    decimalPlaces: 0
  },
  USD: {
    currencyBeforeAmount: false,
    currencyToken: "$",
    decimalCharacter: ".",
    groupingSeparator: ",",
    decimalPlaces: 2
  },
  INR: {
    currencyBeforeAmount: true,
    currencyToken: "₹",
    decimalCharacter: ".",
    groupingSeparator: ",",
    decimalPlaces: 2
  }
}

describe("currency formatting", () => {
  it("should use currency formatting settings", () => {
    const { formatCurrency: format } = getCurrencyFormatting({
      defaultCurrency: "GBP",
      currencySettings: currencyFormatsMock
    })

    expect(format(12345.0)).toEqual("£12345.0")
    expect(format(123450.0)).toEqual("£123450.0")

    expect(format(12345.0, "EUR")).toEqual("€12.345")
    expect(format(123450.0, "EUR")).toEqual("€123.450")

    expect(format(12345.0, "USD")).toEqual("12,345.00$")
    expect(format(123450.0, "USD")).toEqual("123,450.00$")

    expect(format(12345.0, "INR")).toEqual("₹12,345.00")
    expect(format(123450.0, "INR")).toEqual("₹1,23,450.00")

    // uses fallback
    expect(format(12345.0, "AUD")).toEqual("$12,345.00")
    expect(format(123450.0, "AUD")).toEqual("$123,450.00")
  })

  it("should have proper fallback behaviour", () => {
    const { formatCurrency: format } = getCurrencyFormatting({
      defaultCurrency: "GBP",
      currencySettings: {}
    })

    expect(format(12345.0)).toEqual("£12,345.00")
    expect(format(123450.0)).toEqual("£123,450.00")

    // Using non-breaking space character (Unicode 160) as returned by Intl.NumberFormat
    expect(format(12345.0, "EUR")).toEqual("12.345,00 €")
    expect(format(123450.0, "EUR")).toEqual("123.450,00 €")

    expect(format(12345.0, "USD")).toEqual("$12,345.00")
    expect(format(123450.0, "USD")).toEqual("$123,450.00")
  })

  it("should load currency settings from nosto", async () => {
    const mockApi = {
      internal: {
        getSettings: vi.fn(() => ({
          currencySettings: currencyFormatsMock
        }))
      }
    }
    mockNostojs(mockApi)

    getCurrencyFormatting()
    expect(mockApi.internal.getSettings).toHaveBeenCalledTimes(1)
  })

  it("should not crash if currencySettings is not provided", async () => {
    const mockApi = {
      internal: {
        getSettings: vi.fn(() => ({}))
      }
    }
    mockNostojs(mockApi)

    expect(() => getCurrencyFormatting().formatCurrency(12345.0)).not.toThrow()
  })
})
