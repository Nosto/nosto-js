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

  it("should have no imports in client/nosto.d.ts", () => {
    const content = fs.readFileSync("./dist/client/nosto.d.ts", "utf-8")
    expect(content).not.contain("import")
  })

  it("should preserve header in src/client/nosto.d.ts", () => {
    const content = fs.readFileSync("./src/client/nosto.d.ts", "utf-8")
    const lines = content.split("\n")
    expect(lines[0]).toBe("/** @module client */")
    expect(lines[1]).toBe("// @ts-nocheck")
  })
})
