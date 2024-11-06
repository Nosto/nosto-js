import { BackendEnvironment, ScriptLoadOptions } from "../types"
import { getBaseUrl } from "../utils/url"

export type InitProps = {
  merchantId: string
  env?: BackendEnvironment
  options?: ScriptLoadOptions
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
