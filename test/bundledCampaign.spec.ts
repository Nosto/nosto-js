/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { BundledCampaign, registerBundledCampaign } from "../src/lib/bundledCampaign"
import { mockNostojs, restoreNostojs } from "../src/testing/mockNostojs"

// Mock fetch for Shopify API calls
const mockFetch = vi.fn()
global.fetch = mockFetch

describe("BundledCampaign", () => {
  let element: BundledCampaign
  let mockAPI: {
    createRecommendationRequest: ReturnType<typeof vi.fn>
    setResponseMode: ReturnType<typeof vi.fn>
    setElements: ReturnType<typeof vi.fn>
    load: ReturnType<typeof vi.fn>
    attributeProductClicksInCampaign: ReturnType<typeof vi.fn>
  }

  beforeEach(() => {
    // Clear any existing custom elements
    if (customElements.get("nosto-bundled-campaign")) {
      // Can't unregister, so we'll work with the existing one
    } else {
      registerBundledCampaign()
    }

    // Create element using new constructor
    element = new BundledCampaign()
    document.body.appendChild(element)

    // Mock Nosto API
    mockAPI = {
      createRecommendationRequest: vi.fn().mockReturnThis(),
      setResponseMode: vi.fn().mockReturnThis(),
      setElements: vi.fn().mockReturnThis(),
      load: vi.fn(),
      attributeProductClicksInCampaign: vi.fn()
    }

    mockAPI.load.mockResolvedValue({
      recommendations: {
        "test-placement": {
          products: [
            { product_id: "product-1", handle: "product-handle-1" },
            { product_id: "product-2", handle: "product-handle-2" }
          ]
        }
      }
    })

    mockNostojs(mockAPI)
  })

  afterEach(() => {
    if (element.parentNode) {
      document.body.removeChild(element)
    }
    restoreNostojs()
    vi.clearAllMocks()
  })

  it("should create a BundledCampaign element", () => {
    expect(element).toBeInstanceOf(BundledCampaign)
    expect(element.tagName.toLowerCase()).toBe("nosto-bundled-campaign")
  })

  it("should get and set placement attribute", () => {
    element.placement = "test-placement"
    expect(element.placement).toBe("test-placement")
    expect(element.getAttribute("placement")).toBe("test-placement")
  })

  it("should get and set handles attribute", () => {
    element.handles = "handle1:handle2"
    expect(element.handles).toBe("handle1:handle2")
    expect(element.getAttribute("handles")).toBe("handle1:handle2")
  })

  it("should load campaign when placement is set", async () => {
    element.placement = "test-placement"

    // Call the private method directly for testing
    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(mockAPI.createRecommendationRequest).toHaveBeenCalledWith({ includeTagging: true })
    expect(mockAPI.setResponseMode).toHaveBeenCalledWith("JSON_ORIGINAL")
    expect(mockAPI.setElements).toHaveBeenCalledWith(["test-placement"])
    expect(mockAPI.load).toHaveBeenCalled()
    expect(mockAPI.attributeProductClicksInCampaign).toHaveBeenCalledWith(element, expect.any(Object))
  })

  it("should extract product handles from recommendation", async () => {
    element.placement = "test-placement"

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(mockAPI.attributeProductClicksInCampaign).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        products: expect.arrayContaining([
          expect.objectContaining({ product_id: "product-1", handle: "product-handle-1" }),
          expect.objectContaining({ product_id: "product-2", handle: "product-handle-2" })
        ])
      })
    )
  })

  it("should call Shopify API when handles don't match", async () => {
    element.placement = "test-placement"
    element.handles = "old-handle-1:old-handle-2"

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          sections: {
            'nosto-bundled-campaign[placement="test-placement"]': "<div>Updated content</div>"
          }
        })
    })

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(mockFetch).toHaveBeenCalledWith("/cart/update.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: expect.any(URLSearchParams)
    })
  })

  it("should update innerHTML when Shopify returns content", async () => {
    element.placement = "test-placement"
    element.handles = "old-handle"

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          sections: {
            'nosto-bundled-campaign[placement="test-placement"]': "<div>New bundled content</div>"
          }
        })
    })

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(element.innerHTML).toBe("<div>New bundled content</div>")
    expect(element.handles).toBe("product-handle-1:product-handle-2")
  })

  it("should not load campaign when placement is empty", async () => {
    element.placement = ""

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(mockAPI.createRecommendationRequest).not.toHaveBeenCalled()
  })

  it("should handle API errors gracefully", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    mockAPI.load.mockRejectedValueOnce(new Error("API Error"))
    element.placement = "test-placement"

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(consoleSpy).toHaveBeenCalledWith("Failed to load bundled campaign:", expect.any(Error))
    consoleSpy.mockRestore()
  })

  it("should handle Shopify API errors gracefully", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    element.placement = "test-placement"
    element.handles = "old-handle"

    mockFetch.mockRejectedValueOnce(new Error("Fetch Error"))

    await (element as BundledCampaign & { loadCampaign: () => Promise<void> }).loadCampaign()

    expect(consoleSpy).toHaveBeenCalledWith("Failed to load Shopify results:", expect.any(Error))
    consoleSpy.mockRestore()
  })
})
