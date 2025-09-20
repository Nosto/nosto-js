import { getCurrencyFormatting } from "../src/lib/getCurrencyFormatting"
import { describe, expect, it } from "vitest"

describe("debug currency formatting", () => {
  it("should show actual EUR output", () => {
    const { formatCurrency: format } = getCurrencyFormatting({
      defaultCurrency: "GBP",
      currencySettings: {}
    })

    const result = format(12345.0, "EUR")
    console.log('Actual result:', JSON.stringify(result))
    console.log('Actual chars:', [...result].map(c => `${c}(${c.charCodeAt(0)})`))
    
    const expected = "12.345,00 €"
    console.log('Expected:', JSON.stringify(expected))
    console.log('Expected chars:', [...expected].map(c => `${c}(${c.charCodeAt(0)})`))
    
    expect(true).toBe(true) // just to pass the test while debugging
  })
})