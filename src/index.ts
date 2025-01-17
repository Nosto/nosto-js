/** @module ./ */
/* eslint-disable barrel-files/avoid-barrel-files */
import { initNostoStub } from "./utils/dom"

export { isNostoLoaded, getNostoWindow } from "./lib/helpers"
export { init } from "./lib/init"
export { nostojs } from "./lib/nostojs"
export type * from "./types"
export { initNostoStub }

// to make sure that the nosto-js module can also be initialized in a non-browser environment
if (typeof window !== "undefined") {
  // Side effect to ensure the nostojs stub is available immediately
  initNostoStub()
}
