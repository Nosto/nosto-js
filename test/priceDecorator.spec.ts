import { describe, it, expect } from "vitest"
import { priceDecorator } from "../src/formatting/decorator"
import { SearchProduct } from "../src/client/nosto"
import { mockNostojs } from "../src/testing/mockNostojs"

mockNostojs({
  internal: {
    getSettings: () => ({ currencySettings: {} })
  }
})

describe("priceDecorator", () => {
  const decorator = priceDecorator()

  it("should format prices and list prices", () => {
    const product = {
      price: 100,
      listPrice: 150,
      priceCurrencyCode: "USD",
      skus: []
    } satisfies SearchProduct
    const result = decorator(product)
    expect(result.priceText).toBe("$100.00")
    expect(result.listPriceText).toBe("$150.00")
  })

  it("should format prices for skus", () => {
    const product = {
      price: 100,
      listPrice: 150,
      priceCurrencyCode: "USD",
      skus: [
        { price: 50, listPrice: 75 },
        { price: 60, listPrice: 80 }
      ]
    } satisfies SearchProduct
    const result = decorator(product)
    expect(result.skus?.[0].priceText).toBe("$50.00")
    expect(result.skus?.[0].listPriceText).toBe("$75.00")
    expect(result.skus?.[1].priceText).toBe("$60.00")
    expect(result.skus?.[1].listPriceText).toBe("$80.00")
  })

  it("should return the original product if no prices are present", () => {
    const product = {
      priceCurrencyCode: "USD",
      skus: []
    } satisfies SearchProduct
    const result = decorator(product)
    expect(result).toEqual(product)
  })

  it("should handle products with undefined prices", () => {
    const product = {
      price: undefined,
      listPrice: undefined,
      priceCurrencyCode: "USD",
      skus: []
    } satisfies SearchProduct
    const result = decorator(product)
    expect(result.priceText).toBeUndefined()
    expect(result.listPriceText).toBeUndefined()
  })

  it("should use provided currency as fallback currency", () => {
    const product = {
      price: 100,
      listPrice: 150,
      skus: []
    } satisfies SearchProduct
    const result = priceDecorator({ defaultCurrency: "EUR" })(product)
    expect(result.priceText).toBe("100,00 €")
    expect(result.listPriceText).toBe("150,00 €")
  })
})
