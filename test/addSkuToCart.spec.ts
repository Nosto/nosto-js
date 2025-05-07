import { describe, it, expect, vi, afterEach } from "vitest"
import { addSkuToCart, ProductIdentifier } from "../src/lib/addSkuToCart"
import { clearNostoGlobals } from "../src/testing/mockNostojs"

describe("addSkuToCart", () => {
  const product: ProductIdentifier = { productId: "123", skuId: "456" }

  afterEach(() => {
    clearNostoGlobals()
  })

  it("should throw an error if window.Nosto.addSkuToCart is not available", async () => {
    // @ts-expect-error Mocking window object
    window.Nosto = undefined
    await expect(addSkuToCart(product)).rejects.toThrow("Nosto addSkuToCart function is not available")
  })

  it("should call window.Nosto.addSkuToCart with correct parameters", async () => {
    const mockAddSkuToCart = vi.fn().mockResolvedValue(undefined)
    // @ts-expect-error Mocking window object
    window.Nosto = { addSkuToCart: mockAddSkuToCart }

    const slot: string = "slot1"
    const quantity: number = 2

    await addSkuToCart(product, slot, quantity)
    expect(mockAddSkuToCart).toHaveBeenCalledWith(product, slot, quantity)
  })
})
