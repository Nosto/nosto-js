import { BackendEnvironment } from "../types"
import { getBaseUrl } from "../utils/url"
import { nostojs } from "./nostojs"

type Props = {
  merchantId: string
  env?: BackendEnvironment
}

export function init({ merchantId, env }: Props) {
  const url = new URL(`/include/${merchantId}`, getBaseUrl(env))

  const clientScriptPromise = new Promise<void>((resolve, reject) => {
    nostojs(() => resolve())

    const script = document.createElement("script")
    script.async = true
    script.src = url.toString()
    script.onerror = () => reject()
    document.head.appendChild(script)
  })

  return clientScriptPromise
}
