import { API } from "../client/nosto"

export async function nostojs(callback: (api: API) => unknown) {
  return window.nostojs(callback)
}
