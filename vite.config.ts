import { resolve } from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  build: {
    lib: {
      name: "@nosto/nosto-js",
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/testing/testing.ts"),
        resolve(__dirname, "src/formatting/formatting.ts")
      ],
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
