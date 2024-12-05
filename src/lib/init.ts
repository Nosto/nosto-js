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
   * A custom script loader function to use for loading the Nosto client script
   */
  scriptLoader?: (scriptSrc: string, options?: ScriptLoadOptions) => Promise<void>
}

/**
 * Initializes the Nosto client script on the page.
 */
export function init({ merchantId, env, options, scriptLoader }: InitProps) {
  const url = new URL(`/include/${merchantId}`, getBaseUrl(env))

  const loader = scriptLoader ?? defaultScriptLoader
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
