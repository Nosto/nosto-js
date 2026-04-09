import type { TaggingData } from "./client/nosto"
import { init, nostojs } from "."

declare const ShopifyAnalytics: {
  meta: {
    page: {
      pageType: string
      resourceId: number
    }
    selectedVariantId: string
  }
}

declare const Shopify: {
  routes: {
    root?: string
  }
}

async function getProductData(): Promise<Partial<TaggingData>> {
  if (ShopifyAnalytics?.meta?.page?.resourceId) {
    const productId = ShopifyAnalytics.meta.page.resourceId
    return {
      pageType: "product",
      products: [{ product_id: String(productId) }]
    }
  }
  const response = await fetch(`${location.pathname}.json`)
  const data = await response.json()
  return {
    pageType: "product",
    products: [{ product_id: data.product.id }]
  }
}

async function getCollectionData(): Promise<Partial<TaggingData>> {
  if (ShopifyAnalytics?.meta?.page?.resourceId) {
    const collectionId = ShopifyAnalytics.meta.page.resourceId
    const collectionTitle = document.querySelector("meta[property='og:title']")?.getAttribute("content") ?? "Unknown"
    return {
      pageType: "category",
      categoryIds: [String(collectionId)],
      categories: [collectionTitle]
    }
  }
  if (location.pathname.endsWith("/all")) {
    return {
      pageType: "category",
      categories: ["All"]
    }
  }
  const response = await fetch(`${location.pathname}.json`)
  const data = await response.json()
  return {
    pageType: "category",
    categories: [String(data.collection.title)],
    categoryIds: [String(data.collection.id)]
  }
}

async function getSearchData(): Promise<Partial<TaggingData>> {
  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get("q")
  return {
    pageType: "search",
    searchTerms: searchTerm ? [searchTerm] : []
  }
}

async function getCartData(): Promise<Partial<TaggingData>> {
  const response = await fetch("/cart.js")
  const data = await response.json()
  return {
    pageType: "cart",
    cart: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      items: data.items.map((item: any) => ({
        product_id: String(item.product_id),
        variant_id: String(item.variant_id),
        quantity: item.quantity,
        price: item.line_price / 100,
        unit_price: item.price / 100,
        price_currency_code: data.currency
      }))
    }
  }
}

async function getNostoTagging(): Promise<Partial<TaggingData>> {
  const root = Shopify?.routes?.root ?? "/"
  const pathname = window.location.pathname.substring(root.length - 1)

  if (pathname === "/") {
    return { pageType: "front" }
  }
  if (pathname === "/search") {
    return getSearchData()
  }
  if (pathname === "/cart") {
    return getCartData()
  }
  if (pathname.includes("/products/")) {
    return getProductData()
  }
  if (pathname.startsWith("/collections/")) {
    return getCollectionData()
  }
  return { pageType: "other" }
}

export async function updateNostoTagging(merchantId: string) {
  const data = await getNostoTagging()
  nostojs(api => {
    Object.entries(data).forEach(([key, value]) => {
      api.setTaggingProvider(key as keyof TaggingData, value)
    })
  })
  init({ merchantId })
}
