import type { NostojsCallback } from "../client/nosto"

/**
 * Wrapper function for the Nosto client script.
 */
export async function nostojs(callback: NostojsCallback) {
  return window.nostojs(callback)
}
