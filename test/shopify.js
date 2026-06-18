import { init, nostojs } from "https://cdn.jsdelivr.net/npm/@nosto/nosto-js@latest/dist/index.es.js"

async function getProductData() {
  if (ShopifyAnalytics?.meta?.page?.resourceId) {
    const productId = ShopifyAnalytics.meta.page.resourceId
    const skuId = new URLSearchParams(window.location.search).get("variant") || undefined
    return {
      pageType: "product",
      products: [{ product_id: String(productId), selected_sku_id: skuId }]
    }
  }
  const response = await fetch(`${location.pathname}.json`)
  const data = await response.json()
  return {
    pageType: "product",
    products: [{ product_id: String(data.product.id) }]
  }
}

function getCollectionTitle() {
  return document.querySelector("meta[property='og:title']")?.getAttribute("content")
}

async function getCollectionData() {
  if (ShopifyAnalytics?.meta?.page?.resourceId) {
    const collectionId = ShopifyAnalytics.meta.page.resourceId
    const collectionTitle = getCollectionTitle() ?? "Unknown"
    return {
      pageType: "category",
      categoryIds: [String(collectionId)],
      categories: [collectionTitle]
    }
  }
  if (location.pathname.endsWith("/all")) {
    const collectionTitle = getCollectionTitle() ?? "All"
    return {
      pageType: "category",
      categories: [collectionTitle]
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

async function getSearchData() {
  const urlParams = new URLSearchParams(window.location.search)
  const searchTerm = urlParams.get("q")
  return {
    pageType: "search",
    searchTerms: searchTerm ? [searchTerm] : []
  }
}

async function getCartData() {
  const response = await fetch("/cart.js")
  const data = await response.json()
  return {
    pageType: "cart",
    cart: {
      items: data.items.map(item => ({
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

async function getNostoTagging() {
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
  if (pathname.startsWith("/collections/") && !pathname.endsWith("/")) {
    return getCollectionData()
  }
  return { pageType: "other" }
}

async function updateNostoTagging(merchantId) {
  const data = await getNostoTagging()
  nostojs(api => {
    Object.entries(data).forEach(([key, value]) => {
      api.setTaggingProvider(key, value)
    })
  })
  init({ merchantId })
}

updateNostoTagging("shopify-88162959607")
