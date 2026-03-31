import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"

vi.mock("../src", () => ({
  nostojs: vi.fn(),
  init: vi.fn()
}))

import { updateNostoTagging } from "../src/shopify"
import { nostojs, init } from "../src"

function setLocation(pathname: string, search = "") {
  vi.stubGlobal("location", { pathname, search })
}

function invokeTaggingCallback() {
  const cb = vi.mocked(nostojs).mock.calls[0][0]
  const mockApi = { setTaggingProvider: vi.fn() }
  // @ts-expect-error invoking captured callback with mock API
  cb(mockApi)
  return mockApi.setTaggingProvider
}

describe("shopify", () => {
  beforeEach(() => {
    // @ts-expect-error Shopify global
    globalThis.Shopify = { routes: { root: "/" } }
    // @ts-expect-error ShopifyAnalytics global
    globalThis.ShopifyAnalytics = undefined
    vi.mocked(nostojs).mockClear()
    vi.mocked(init).mockClear()
  })

  afterEach(() => {
    // @ts-expect-error cleanup
    delete globalThis.Shopify
    // @ts-expect-error cleanup
    delete globalThis.ShopifyAnalytics
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe("page type detection", () => {
    it("should detect front page", async () => {
      setLocation("/")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "front")
    })

    it("should detect search page with query", async () => {
      setLocation("/search", "?q=shoes")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "search")
      expect(setProvider).toHaveBeenCalledWith("searchTerms", ["shoes"])
    })

    it("should detect search page without query", async () => {
      setLocation("/search")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "search")
      expect(setProvider).toHaveBeenCalledWith("searchTerms", [])
    })

    it("should detect cart page and fetch cart data", async () => {
      setLocation("/cart")
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          json: () =>
            Promise.resolve({
              items: [{ product_id: 111, variant_id: 222, quantity: 2, price: 1999 }]
            })
        })
      )
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "cart")
      expect(setProvider).toHaveBeenCalledWith("cart", {
        items: [{ product_id: "111", variant_id: "222", quantity: 2, price: 1999 }]
      })
      expect(fetch).toHaveBeenCalledWith("/cart.js")
    })

    it("should detect product page using ShopifyAnalytics", async () => {
      setLocation("/products/my-product")
      // @ts-expect-error ShopifyAnalytics global
      globalThis.ShopifyAnalytics = { meta: { page: { resourceId: 12345 } } }
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "product")
      expect(setProvider).toHaveBeenCalledWith("products", [{ product_id: "12345" }])
    })

    it("should detect product page using fetch fallback", async () => {
      setLocation("/products/my-product")
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          json: () => Promise.resolve({ product: { id: "prod-99" } })
        })
      )
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "product")
      expect(setProvider).toHaveBeenCalledWith("products", [{ product_id: "prod-99" }])
      expect(fetch).toHaveBeenCalledWith("/products/my-product.json")
    })

    it("should detect collection page using ShopifyAnalytics", async () => {
      setLocation("/collections/summer")
      // @ts-expect-error ShopifyAnalytics global
      globalThis.ShopifyAnalytics = { meta: { page: { resourceId: 67890 } } }
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "category")
      expect(setProvider).toHaveBeenCalledWith("categoryIds", ["67890"])
    })

    it("should detect collection page using fetch fallback", async () => {
      setLocation("/collections/summer")
      vi.stubGlobal(
        "fetch",
        vi.fn().mockResolvedValue({
          json: () => Promise.resolve({ collection: { id: "col-42", title: "Summer Collection" } })
        })
      )
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "category")
      expect(setProvider).toHaveBeenCalledWith("categories", ["Summer Collection"])
      expect(setProvider).toHaveBeenCalledWith("categoryIds", ["col-42"])
      expect(fetch).toHaveBeenCalledWith("/collections/summer.json")
    })

    it("should detect other page type for unknown paths", async () => {
      setLocation("/pages/about")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "other")
    })
  })

  describe("localized Shopify root", () => {
    it("should handle localized root for front page", async () => {
      // @ts-expect-error Shopify global
      globalThis.Shopify = { routes: { root: "/en/" } }
      setLocation("/en/")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "front")
    })

    it("should handle localized root for product page", async () => {
      // @ts-expect-error Shopify global
      globalThis.Shopify = { routes: { root: "/fr/" } }
      setLocation("/fr/products/my-product")
      // @ts-expect-error ShopifyAnalytics global
      globalThis.ShopifyAnalytics = { meta: { page: { resourceId: 55555 } } }
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "product")
      expect(setProvider).toHaveBeenCalledWith("products", [{ product_id: "55555" }])
    })

    it("should handle localized root for search page", async () => {
      // @ts-expect-error Shopify global
      globalThis.Shopify = { routes: { root: "/de/" } }
      setLocation("/de/search", "?q=schuhe")
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "search")
      expect(setProvider).toHaveBeenCalledWith("searchTerms", ["schuhe"])
    })

    it("should handle localized root for collection page", async () => {
      // @ts-expect-error Shopify global
      globalThis.Shopify = { routes: { root: "/es/" } }
      setLocation("/es/collections/verano")
      // @ts-expect-error ShopifyAnalytics global
      globalThis.ShopifyAnalytics = { meta: { page: { resourceId: 77777 } } }
      await updateNostoTagging("test-123")
      const setProvider = invokeTaggingCallback()
      expect(setProvider).toHaveBeenCalledWith("pageType", "category")
      expect(setProvider).toHaveBeenCalledWith("categoryIds", ["77777"])
    })
  })

  describe("init", () => {
    it("should call init with the provided merchantId", async () => {
      setLocation("/")
      await updateNostoTagging("my-merchant-id")
      expect(init).toHaveBeenCalledWith({ merchantId: "my-merchant-id" })
    })

    it("should call nostojs with a tagging callback", async () => {
      setLocation("/")
      await updateNostoTagging("test-123")
      expect(nostojs).toHaveBeenCalledOnce()
      expect(nostojs).toHaveBeenCalledWith(expect.any(Function))
    })
  })
})
