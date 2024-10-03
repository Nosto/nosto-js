import { initNostoStub, setPageType } from "../utils/dom"
import { PageType } from "../client/nosto"
import { BackendEnvironment } from "../types"
import { getBaseUrl } from "../utils/url"
import { nostoApi } from "./nostoApi"

type Props = {
  merchantId: string
  pageType?: PageType
  env?: BackendEnvironment
}

export function init({ merchantId, pageType, env }: Props) {
  initNostoStub()

  const url = new URL(`/include/${merchantId}`, getBaseUrl(env))

  const clientScriptPromise = new Promise<void>((resolve, reject) => {
    nostoApi(() => resolve())

    const script = document.createElement("script")
    script.async = true
    script.src = url.toString()
    script.onerror = () => reject()
    document.head.appendChild(script)
  })

  if (pageType) {
    setPageType(pageType)
  }

  return clientScriptPromise
}
