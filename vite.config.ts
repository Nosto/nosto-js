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
    coverage: {
      include: ["src/**/*.{js,ts}"],
      skipFull: true,
      thresholds: {
        statements: 80,
        branches: 80,
        lines: 80
      }
    },
    globals: true,
    environment: "jsdom"
  }
})
