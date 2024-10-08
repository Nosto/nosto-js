import { BackendEnvironment } from "../types"
import { getBaseUrl } from "../utils/url"

type Props = {
  merchantId: string
  env?: BackendEnvironment
  options?: {
    position?: "head" | "body"
    attributes?: Record<string, string>
  }
}

export function init({ merchantId, env, options }: Props) {
  const url = new URL(`/include/${merchantId}`, getBaseUrl(env))

  const clientScriptPromise = new Promise<void>((resolve, reject) => {
    // nostojs(() => resolve())

    const script = document.createElement("script")
    script.src = url.toString()
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
