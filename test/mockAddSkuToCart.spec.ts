import { describe, it, expect, vi, afterEach } from "vitest"
import { mockAddSkuToCart } from "../src/testing/mockAddSkuToCart"
import { clearNostoGlobals } from "../src/testing/mockNostojs"
import { addSkuToCart } from "../src/lib/addSkuToCart"

describe("mockAddSkuToCart", () => {
  afterEach(() => {
    clearNostoGlobals()
  })

  it("should register a mock function and assign it to window.Nosto.addSkuToCart", () => {
    const mockFn = vi.fn().mockResolvedValue(undefined)
    const returnedMockFn = mockAddSkuToCart(mockFn)

    expect(window.Nosto).toBeDefined()
    expect(window.Nosto?.addSkuToCart).toBeDefined()
    expect(window.Nosto?.addSkuToCart).toBe(mockFn)
    expect(returnedMockFn).toBe(mockFn)
  })

  it("should return a function that resolves to undefined when no mock is provided", async () => {
    const mockFn = mockAddSkuToCart()

    const result = await mockFn({ productId: "123", skuId: "456" })
    expect(result).toBeUndefined()
  })

  it("should create window.Nosto if it does not exist", () => {
    // @ts-expect-error Mocking window object
    window.Nosto = undefined

    mockAddSkuToCart()

    expect(window.Nosto).toBeDefined()
  })

  it("should allow tracking calls made to the mock function", async () => {
    const mockFn = vi.fn().mockResolvedValue(undefined)
    mockAddSkuToCart(mockFn)

    const product = { productId: "123", skuId: "456" }
    const slot = "slot1"
    const quantity = 2

    await addSkuToCart(product, slot, quantity)

    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(product, slot, quantity)
  })

  it("should work with addSkuToCart function", async () => {
    const mockFn = vi.fn().mockResolvedValue(undefined)
    mockAddSkuToCart(mockFn)

    const product = { productId: "123", skuId: "456" }

    await addSkuToCart(product)

    expect(mockFn).toHaveBeenCalledWith(product, undefined, undefined)
  })

  it("should use default implementation when no mock is provided", async () => {
    mockAddSkuToCart()

    const product = { productId: "123", skuId: "456" }

    // Should not throw
    await expect(addSkuToCart(product)).resolves.toBeUndefined()
  })
})
