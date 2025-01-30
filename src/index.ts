/** @module ./ */

/**
 * Disclaimer:
 * For new exports, prefer new named exports (like /testing or /performance) over the main barrel file.
 * Index file should (ideally) export only the main functionality of the package - client script init.
 */

import { initNostoStub } from "./utils/dom"

// to make sure that the nosto-js module can also be initialized in a non-browser environment
if (typeof window !== "undefined") {
  // Side effect to ensure the nostojs stub is available immediately
  initNostoStub()
}

export { isNostoLoaded, getNostoWindow } from "./lib/helpers"
export { init, type InitProps } from "./lib/init"
export { getSettings } from "./lib/settings"
export { nostojs } from "./lib/nostojs"
export type * from "./types"
export { initNostoStub }
