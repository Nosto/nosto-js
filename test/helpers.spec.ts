import { describe, it, expect, afterEach } from "vitest"
import { isNostoLoaded, getNostoWindow } from "../src/lib/helpers"
import { clearNostoGlobals } from "../src/testing/mockNostojs"

describe("helpers", () => {
  afterEach(() => {
    clearNostoGlobals()
  })

  describe("isNostoLoaded", () => {
    it("should return false when window.nosto is undefined", () => {
      expect(isNostoLoaded()).toBe(false)
    })

    it("should return true when window.nosto is defined", () => {
      // @ts-expect-error Mocking window object
      window.nosto = { test: true }
      expect(isNostoLoaded()).toBe(true)
    })
  })

  describe("getNostoWindow", () => {
    it("should return window.nosto", () => {
      const nostoObj = { test: true }
      // @ts-expect-error Mocking window object
      window.nosto = nostoObj
      expect(getNostoWindow()).toBe(nostoObj)
    })
  })
})
