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

function getSearchTerms() {
  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get("q")
  return searchTerm ? [searchTerm] : []
}

function getNostoTagging(): Partial<TaggingData> {
  const { selectedVariantId, page } = ShopifyAnalytics.meta
  const { pageType, resourceId } = page
  // TODO cart tagging
  switch (pageType) {
    case "home":
      return {
        pageType: "front"
      }
    case "collection":
      return {
        pageType: "category",
        categoryIds: [String(resourceId)]
        // TODO category names
      }
    case "product":
      return {
        pageType: "product",
        products: [
          {
            product_id: String(resourceId),
            variation_id: selectedVariantId
          }
        ]
      }
    case "searchresults":
      return {
        pageType: "search",
        searchTerms: getSearchTerms()
      }
    case "cart":
      return {
        pageType: "cart"
      }
    default:
      return {
        pageType: "other"
      }
  }
}

// 1: data is pulled from ShopifyAnalytics object
export function updateNostoTagging(merchantId: string) {
  init({ merchantId })
  nostojs(api => {
    const data = getNostoTagging()
    Object.entries(data).forEach(([key, value]) => {
      api.setTaggingProvider(key as keyof TaggingData, value)
    })
  })
}

// 2: data is given as an argument to the function
export function updateNostoTaggingAlt(merchantId: string, data: Partial<TaggingData>) {
  init({ merchantId })
  nostojs(api => {
    Object.entries(data).forEach(([key, value]) => {
      api.setTaggingProvider(key as keyof TaggingData, value)
    })
  })
}
