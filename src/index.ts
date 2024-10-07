import { initNostoStub } from "./utils/dom"

export * from "./lib/getNostoWindow"
export * from "./lib/init"
export * from "./lib/nostojs"

// Side effect to ensure the nostojs stub is available immediately
initNostoStub()
