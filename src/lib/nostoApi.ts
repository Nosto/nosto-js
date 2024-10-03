import { API } from "../client/nosto"

export async function nostoApi(callback: (api: API) => unknown) {
  return window.nostojs(callback)
}
