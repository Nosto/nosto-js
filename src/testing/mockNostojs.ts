import { API, nostojs, NostojsCallback } from "../client/nosto"

let originalNostojs: nostojs

type MockMember<T> = T extends (...args: never[]) => unknown
  ? (...args: Parameters<T>) => Partial<ReturnType<T>>
  : T extends object
    ? { [K in keyof T]?: Partial<T[K]> }
    : T

type MockApi = { [K in keyof API]?: MockMember<API[K]> }

/**
 * Replaces the `nostojs` and `window.nostojs` functions with a mock implementation.
 */
export function mockNostojs(mock?: MockApi) {
  if (!originalNostojs) {
    originalNostojs = window.nostojs
  }
  window.nostojs = (callback: NostojsCallback) => callback(mock as unknown as API) as Promise<unknown>
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
