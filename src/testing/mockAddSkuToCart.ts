import { addSkuToCart } from "../lib/addSkuToCart"

export type AddSkuToCartFunction = typeof addSkuToCart

/**
 * Registers a mock function and assigns it to window.Nosto.addSkuToCart.
 *
 * @param mockFn - Optional mock function to use. If not provided, a simple implementation is used.
 * @returns The mock function that was assigned to window.Nosto.addSkuToCart.
 */
export function mockAddSkuToCart(mockFn: AddSkuToCartFunction = async () => {}): AddSkuToCartFunction {
  if (!window.Nosto) {
    window.Nosto = {}
  }

  window.Nosto.addSkuToCart = mockFn

  return mockFn
}
