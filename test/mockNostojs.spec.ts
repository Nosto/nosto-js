import { describe, it, expect, vi, beforeEach } from "vitest"
import { isNostoLoaded, nostojs } from "../src"
import { mockNostojs, resetNostojsMock } from "../src/testing/mockNostojs"

describe("mockNostojs", () => {
  beforeEach(() => {
    resetNostojsMock()
  })

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

  describe("isNostoLoaded", () => {
    it("should return false by default", async () => {
      expect(isNostoLoaded()).toBe(false)
    })

    it("should return true when loaded", async () => {
      mockNostojs()
      expect(isNostoLoaded()).toBe(true)
    })
  })
})
