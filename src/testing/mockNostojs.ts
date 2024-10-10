import { API, nostojs } from "../client/nosto"

let originalNostojs: nostojs

export function mockNostojs(mock?: Partial<API>) {
  if (!originalNostojs) {
    originalNostojs = window.nostojs
  }
  window.nostojs = (callback: (api: API) => unknown) => callback(mock as API)
}

export function restoreNostojs() {
  window.nostojs = originalNostojs
}

export function clearNostoGlobals() {
  Object.assign(window, {
    ...window,
    // clearing Nosto iframe window handle
    nosto: undefined,
    // clearing nostojs stub
    nostojs: undefined,
    // clearing Shopify specific Nosto namespace
    Nosto: undefined
  })
}
