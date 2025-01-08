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

    it("should add shopify international script to dom", () => {
      init({
        merchantId: "shopify-123",
        env: "production",
        shopifyInternational: {
          language: "en",
          marketId: "123"
        }
      })
      const expectedUrl =
        "https://connect.nosto.com/script/shopify/market/nosto.js?merchant=shopify-123&market=123&locale=en"
      expect(document.querySelector("script")?.getAttribute("src")).toBe(expectedUrl)
      expect(document.querySelector("script")?.getAttribute("nosto-language")).toBe("en")
      expect(document.querySelector("script")?.getAttribute("nosto-market-id")).toBe("123")
    })

    it("should pass options to script loader for shopify international", () => {
      init({
        merchantId: "shopify-123",
        env: "production",
        options: {
          attributes: {
            "nosto-client-script": ""
          }
        },
        shopifyInternational: {
          language: "en",
          marketId: "123"
        }
      })
      expect(document.querySelector("[nosto-client-script]")?.getAttribute("nosto-language")).toBe("en")
      expect(document.querySelector("[nosto-client-script]")?.getAttribute("nosto-market-id")).toBe("123")
    })
  })
})
