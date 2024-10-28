import { API } from "../client/nosto"

/**
 * Wrapper function for the Nosto client script.
 */
export async function nostojs(callback: (api: API) => unknown) {
  return window.nostojs(callback)
}
