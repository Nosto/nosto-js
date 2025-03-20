interface Window {
  nosto?: import("../types").NostoSandbox
  nostojs: import("../client/nosto").nostojs

  Nosto?: {
    addSkuToCart?(
      product: { productId: string; skuId: string },
      element?: string | HTMLElement,
      quantity?: number
    ): Promise<void>
  }
}
