import { describe, it, expect, vi } from "vitest"
import { nostojs, isNostoLoaded } from "../src"
import { mockNostojs, restoreNostojs } from "../src/testing/mockNostojs"
import { reloadNosto } from "../src/testing/reloadNosto"

describe("mockNostojs", () => {
  it("should support function members with partial returns", async () => {
    mockNostojs({
      pageTagging: () => ({
        categories: ["foo", "bar"]
      })
    })
    const api = await new Promise(nostojs)
    expect(api.pageTagging().categories).toEqual(["foo", "bar"])
  })

  it("should support object members with partial fields", async () => {
    mockNostojs({
      internal: {
        logger: {
          log: vi.fn()
        }
      }
    })
    const api = await new Promise(nostojs)
    api.internal.logger.log("foo")
    expect(api.internal.logger.log).toHaveBeenCalledWith("foo")
  })

  it("should be loaded in mock mode", () => {
    mockNostojs()
    expect(isNostoLoaded()).toBe(true)
  })

  it("should support second parameter for partial window object", () => {
    const mockWindow = {
      reload: vi.fn(),
      _targetWindow: window
    }

    mockNostojs({}, mockWindow)
    reloadNosto({})
    expect(mockWindow.reload).toHaveBeenCalled()
  })

  it("should merge defaults into mock object", async () => {
    mockNostojs({
      pageTagging: () => ({
        categories: ["foo", "bar"]
      })
    })
    const api = await new Promise(nostojs)
    // overridden behaviour
    expect(api.pageTagging().categories).toEqual(["foo", "bar"])
    // default behaviour
    expect(api.internal.context.mode.isPreview()).toBe(false)
  })
})

describe("restoreNostojs", () => {
  it("should restore the original nostojs function", () => {
    mockNostojs()
    // @ts-expect-error Mocking window object
    const overridden = window.nostojs
    restoreNostojs()
    // @ts-expect-error Mocking window object
    expect(window.nostojs).not.toBe(overridden)
  })
})
