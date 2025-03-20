export type ProductIdentifier = {
  productId: string
  skuId: string
}

export type SlotReference = string | HTMLElement

/**
 * Add a product to the cart.
 *
 * @param product - The product identifier.
 * @param slotIdOrElement - The slot ID or element to use for the product.
 * @param quantity - The quantity of the product to add.
 */
export async function addSkuToCart(product: ProductIdentifier, slotIdOrElement?: SlotReference, quantity?: number) {
  if (!window.Nosto?.addSkuToCart) {
    throw new Error("Nosto addSkuToCart function is not available")
  }
  await window.Nosto.addSkuToCart(product, slotIdOrElement, quantity)
}
