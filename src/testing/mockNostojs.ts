import { API, nostojs } from "../client/nosto"

let originalNostojs: nostojs

/**
 * Replaces the `nostojs` and `window.nostojs` functions with a mock implementation.
 */
export function mockNostojs(mock?: Partial<API>) {
  if (!originalNostojs) {
    originalNostojs = window.nostojs
  }
  window.nostojs = (callback: (api: API) => unknown) => callback(mock as API)
}

/**
 * Restores the original implementation for `nostojs` and `window.nostojs`.
 */
export function restoreNostojs() {
  window.nostojs = originalNostojs
}

/**
 * Clears out all Nosto related globals from the window object.
 */
export function clearNostoGlobals() {
  Object.assign(window, {
    // clearing Nosto iframe window handle
    nosto: undefined,
    // clearing nostojs stub
    nostojs: undefined,
    // clearing Shopify specific Nosto namespace
    Nosto: undefined
  })
}
