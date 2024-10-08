import { resolve } from "path"
import { defineConfig } from "vitest/config"

export default defineConfig({
  build: {
    lib: {
      name: "nosto-js",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => `index.${format}.js`
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
