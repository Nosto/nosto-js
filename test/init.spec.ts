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
  })
})
