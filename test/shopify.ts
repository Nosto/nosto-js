import type { TaggingData } from "../src/client/nosto"
import { nostojs } from "../src/lib/nostojs"
import { init } from "../src/lib/init"

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
    return {
      pageType: "category",
      categoryIds: [String(collectionId)]
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
    return { pageType: "cart" }
  }
  if (pathname.includes("/products/")) {
    return getProductData()
  }
  if (pathname.startsWith("/collections/")) {
    return getCollectionData()
  }
  return { pageType: "other" }
}

export function updateNostoTagging(merchantId: string) {
  nostojs(api => api.setAutoLoad(false))
  init({ merchantId })
  nostojs(async api => {
    const data = await getNostoTagging()
    Object.entries(data).forEach(([key, value]) => {
      api.setTaggingProvider(key as keyof TaggingData, value)
    })
    api.load()
  })
}
