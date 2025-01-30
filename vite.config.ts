import { resolve } from "path"
import { defineConfig } from "vitest/config"

const entryPoints = ["src/index.ts", "src/performance.ts", "src/testing.ts"]

export default defineConfig({
  build: {
    lib: {
      name: "@nosto/nosto-js",
      entry: entryPoints.map(entry => resolve(__dirname, entry)),
      formats: ["es", "cjs"],
      fileName: (format, name) => `${name}.${format}.js`
    }
  },
  server: {
    port: 8080
  },
  test: {
    globals: true,
    environment: "jsdom"
  }
})
