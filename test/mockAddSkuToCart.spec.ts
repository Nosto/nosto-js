import { describe, it, expect, vi, afterEach } from "vitest"
import { mockAddSkuToCart } from "../src/testing/mockAddSkuToCart"
import { clearNostoGlobals } from "../src/testing/mockNostojs"

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
})
