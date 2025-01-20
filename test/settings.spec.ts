import { getSettings } from "../src"
import { mockSettings } from "../src/testing/mockSettings"
import { describe, expect, it } from "vitest"

describe("settings", () => {
  it("returns expected settings", () => {
    mockSettings({
      account: "123"
    })

    expect(getSettings()?.account).toBe("123")
  })
})
