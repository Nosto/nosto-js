/** @module ./ */
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
