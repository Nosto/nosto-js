/** @module ./ */
import { initNostoStub } from "./utils/dom"

export * from "./lib/helpers"
export * from "./lib/init"
export * from "./lib/nostojs"
export * from "./types"
export { initNostoStub }

// to make sure that the nosto-js module can also be initialized in a non-browser environment
if (typeof window !== "undefined") {
  // Side effect to ensure the nostojs stub is available immediately
  initNostoStub()
}
