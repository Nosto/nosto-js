import { describe, it, expect, vi, afterEach } from "vitest"
import { reloadNosto } from "../src/testing/reloadNosto"
import { clearNostoGlobals } from "../src/testing/mockNostojs"
import { Settings } from "../src/client/nosto"

describe("reloadNosto", () => {
  afterEach(() => {
    clearNostoGlobals()
  })

  it("returns false if window.nosto is undefined", () => {
    // @ts-expect-error Mocking window object
    window.nosto = undefined
    const result = reloadNosto({})
    expect(result).toBe(false)
  })

  it("returns false if window.nosto does not have a reload method", () => {
    // @ts-expect-error Mocking window object
    window.nosto = {}
    const result = reloadNosto({})
    expect(result).toBe(false)
  })

  it("calls window.nosto.reload with provided settings and returns true", () => {
    const mockReload = vi.fn()
    const settings = { key: "value" } as unknown as Settings
    // @ts-expect-error Mocking window object
    window.nosto = { reload: mockReload }

    const result = reloadNosto(settings)
    expect(mockReload).toHaveBeenCalledTimes(1)
    expect(mockReload).toHaveBeenCalledWith(settings)
    expect(result).toBe(true)
  })
})
