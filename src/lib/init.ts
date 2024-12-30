import { BackendEnvironment, ScriptLoadOptions } from "../types"
import { getBaseUrl } from "../utils/url"

export type InitProps = {
  /**
   * The merchant ID to use for the Nosto client script.
   */
  merchantId: string
  /**
   * The environment to use for the Nosto client script
   * @default "production"
   */
  env?: BackendEnvironment
  /**
   * Options for the script loader
   */
  options?: ScriptLoadOptions
  /**
   * Shopify International specific options
   */
  shopifyInternational?: {
    language?: string
    marketId?: string | number
  }
  /**
   * A custom script loader function to use for loading the Nosto client script
   */
  scriptLoader?: (scriptSrc: string, options?: ScriptLoadOptions) => Promise<void>
}

function initShopifyInternational({ env, merchantId, shopifyInternational, scriptLoader }: InitProps) {
  const existingScript = document.querySelector("script[nosto-language], script[nosto-market-id]")

  const marketId = String(shopifyInternational?.marketId || "")
  const language = shopifyInternational?.language || ""

  const attributeMismatch =
    existingScript?.getAttribute("nosto-language") !== language ||
    existingScript?.getAttribute("nosto-market-id") !== marketId

  if (!existingScript || attributeMismatch) {
    const nostoSandbox = document.querySelector("#nosto-sandbox")

    existingScript?.parentNode?.removeChild(existingScript)
    nostoSandbox?.parentNode?.removeChild(nostoSandbox)

    const url = new URL(`/script/shopify/market/nosto.js`, getBaseUrl(env))
    url.searchParams.append("merchant", merchantId)
    url.searchParams.append("market", marketId)
    url.searchParams.append("locale", language.toLowerCase())
    const attributes = { "nosto-language": language, "nosto-market-id": marketId }
    const loader = scriptLoader ?? defaultScriptLoader
    return loader(url.toString(), { attributes })
  }
  return Promise.resolve()
}

/**
 * Initializes the Nosto client script on the page.
 */
export function init(initProps: InitProps) {
  if (initProps.shopifyInternational) {
    return initShopifyInternational(initProps)
  }
  const { merchantId, env, options, scriptLoader } = initProps
  const loader = scriptLoader ?? defaultScriptLoader
  const url = new URL(`/include/${merchantId}`, getBaseUrl(env))
  return loader(url.toString(), options)
}

function defaultScriptLoader(url: string, options?: ScriptLoadOptions) {
  const clientScriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    script.type = "text/javascript"
    script.onload = () => resolve()
    script.onerror = () => reject()
    Object.entries(options?.attributes ?? {}).forEach(([k, v]) => script.setAttribute(k, v))
    if (options?.position === "head") {
      document.head.appendChild(script)
    } else {
      document.body.appendChild(script)
    }
  })

  return clientScriptPromise
}
