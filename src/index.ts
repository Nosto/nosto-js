import { initNostoStub } from "./utils/dom"

export * from "./lib/helpers"
export * from "./lib/init"
export * from "./lib/nostojs"
export { initNostoStub }

// Side effect to ensure the nostojs stub is available immediately
initNostoStub()
