/**
 * BundledCampaign custom element for rendering Nosto bundled campaigns.
 *
 * This element fetches placement data from Nosto and renders bundled content
 * with proper attribution tracking.
 */

import { nostojs } from "./nostojs"

export class BundledCampaign extends HTMLElement {
  /**
   * Placement identifier for the Nosto campaign
   */
  get placement(): string {
    return this.getAttribute("placement") || ""
  }

  set placement(value: string) {
    this.setAttribute("placement", value)
  }

  /**
   * Colon-separated list of product handles
   */
  get handles(): string {
    return this.getAttribute("handles") || ""
  }

  set handles(value: string) {
    this.setAttribute("handles", value)
  }

  static get observedAttributes() {
    return ["placement", "handles"]
  }

  connectedCallback() {
    this.loadCampaign()
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.loadCampaign()
    }
  }

  /**
   * Load campaign data and render content
   */
  private async loadCampaign() {
    if (!this.placement) {
      return
    }

    try {
      await nostojs(async api => {
        // Fetch JSON placement result via recommendation request
        const response = await api
          .createRecommendationRequest({ includeTagging: true })
          .setResponseMode("JSON_ORIGINAL")
          .setElements([this.placement])
          .load()

        const recommendation = response.recommendations[this.placement]
        if (!recommendation || typeof recommendation !== "object" || !("products" in recommendation)) {
          return
        }

        // Create handles string as colon-separated list of product handles from result
        const productHandles = this.extractProductHandles(recommendation)
        const newHandles = productHandles.join(":")

        // If handles doesn't match this.handles, load results via Shopify
        if (newHandles !== this.handles && newHandles.length > 0) {
          await this.loadShopifyResults(newHandles)
        }

        // Set up parameterless attribution via api.attributeProductClicksInCampaign
        api.attributeProductClicksInCampaign(this, recommendation)
      })
    } catch (error) {
      console.error("Failed to load bundled campaign:", error)
    }
  }

  /**
   * Extract product handles from recommendation result
   */
  private extractProductHandles(recommendation: {
    products?: Array<{ product_id?: string; handle?: string }>
  }): string[] {
    if (!recommendation.products || !Array.isArray(recommendation.products)) {
      return []
    }

    return recommendation.products
      .map((product: { product_id?: string; handle?: string }) => {
        // Use product_id as handle, or extract handle from custom fields if available
        return product.handle || product.product_id || ""
      })
      .filter(Boolean)
  }

  /**
   * Load results via Shopify bundled section rendering API call
   */
  private async loadShopifyResults(newHandles: string) {
    try {
      // Make bundled section rendering API call (/cart/update) to fetch content
      const params = new URLSearchParams()
      params.append("sections", `nosto-bundled-campaign[placement="${this.placement}"]`)

      const response = await fetch("/cart/update.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: params
      })

      if (response.ok) {
        const data = await response.json()

        // Extract content and put it into this.innerHTML
        const sectionKey = `nosto-bundled-campaign[placement="${this.placement}"]`
        if (data.sections && data.sections[sectionKey]) {
          this.innerHTML = data.sections[sectionKey]

          // Update handles attribute
          this.handles = newHandles
        }
      }
    } catch (error) {
      console.error("Failed to load Shopify results:", error)
    }
  }
}

/**
 * Register the custom element
 */
export function registerBundledCampaign() {
  if (typeof window !== "undefined" && !customElements.get("nosto-bundled-campaign")) {
    customElements.define("nosto-bundled-campaign", BundledCampaign)
  }
}
