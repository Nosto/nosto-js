import { describe, expect, it } from "vitest"
import fs from "fs"
import json from "../package.json"

describe("exports", () => {
  const files = Object.values(json.exports).flatMap(v => Object.values(v))
  files.forEach(file => {
    it(`${file} should exist`, () => {
      expect(fs.existsSync(file)).toBe(true)
    })
  })
})
