import { describe, it, expect } from "vitest"

describe("init in node environment", () => {
  it("should not throw an error", async () => {
    // @ts-expect-error clear global window to emulate node environment
    global.window = undefined
    // import side effect should not throw error
    const { initNostoStub } = await import("../src")
    // actual invocation should throw error
    expect(() => initNostoStub()).toThrow()
  })
})
