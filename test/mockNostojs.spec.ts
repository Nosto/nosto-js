import { describe, it, expect, vi } from "vitest"
import { nostojs } from "../src"
import { mockNostojs } from "../src/testing/mockNostojs"

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
})
