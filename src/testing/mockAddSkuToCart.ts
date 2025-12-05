import type { ProductIdentifier, SlotReference } from "../lib/addSkuToCart"

export type AddSkuToCartFunction = (
  product: ProductIdentifier,
  slotIdOrElement?: SlotReference,
  quantity?: number
) => Promise<void>

/**
 * Registers a mock function and assigns it to window.Nosto.addSkuToCart.
 *
 * @param mockFn - Optional mock function to use. If not provided, a simple implementation is used.
 * @returns The mock function that was assigned to window.Nosto.addSkuToCart.
 */
export function mockAddSkuToCart(mockFn?: AddSkuToCartFunction): AddSkuToCartFunction {
  const finalMockFn = mockFn || (async () => {})

  if (!window.Nosto) {
    window.Nosto = {}
  }

  window.Nosto.addSkuToCart = finalMockFn

  return finalMockFn
}
