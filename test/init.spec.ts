import { afterEach, describe, expect, it } from "vitest"
import { init } from "../src"

describe("main", () => {
  afterEach(() => {
    document.body.innerHTML = ""
  })
  describe("init", () => {
    it("should add production client script to dom", async () => {
      init({
        merchantId: "shopify-123",
        env: "production"
      })
      const expectedUrl = "https://connect.nosto.com/include/shopify-123"
      expect(document.querySelector(`script[src='${expectedUrl}']`)).not.toBeNull()
    })
    it("should add staging client script to dom", async () => {
      init({
        merchantId: "shopify-123",
        env: "staging"
      })
      const expectedUrl = "https://connect.staging.nosto.com/include/shopify-123"
      expect(document.querySelector(`script[src='${expectedUrl}']`)).not.toBeNull()
    })
    it("should add production client script to dom if env is not specified", async () => {
      init({
        merchantId: "shopify-123"
      })
      const expectedUrl = "https://connect.nosto.com/include/shopify-123"
      expect(document.querySelector(`script[src='${expectedUrl}']`)).not.toBeNull()
    })
    it("should add page type element to the page if value is provided", async () => {
      init({
        merchantId: "shopify-123",
        pageType: "checkout"
      })

      const el = document.querySelector(".nosto_page_type")
      expect(el).not.toBeNull()
      expect(el?.textContent).toBe("checkout")
    })
    it("should not add page type element to the page if value is not provided", async () => {
      init({
        merchantId: "shopify-123"
      })

      const el = document.querySelector(".nosto_page_type")
      expect(el).toBeNull()
    })
  })
})
