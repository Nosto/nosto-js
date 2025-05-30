import { API, nostojs, NostojsCallback } from "../client/nosto"
import { NostoSandbox } from "../types"

let originalNostojs: nostojs
let originalNosto: NostoSandbox | undefined

/**
 * MockMember turns API members into functions returning partials or in case of objects partial objects.
 */
export type MockMember<T> = T extends (...args: never[]) => unknown
  ? (...args: Parameters<T>) => Partial<ReturnType<T>>
  : T extends object
    ? { [K in keyof T]?: Partial<T[K]> }
    : T

export type MockAPI = { [K in keyof API]?: MockMember<API[K]> }
export type MockWindow = Pick<NostoSandbox, "reload">

function mockWindow() {
  return {
    reload: () => {}
  }
}

function mockDefaults(): MockAPI {
  return {
    pageTagging: () => ({}),
    internal: {
      logger: console,
      setTaggingProvider: () => {},
      getSettings: () => ({}),
      modifySettings: () => {},
      context: {
        mode: {
          isPreview: () => false,
          setPreview: () => false,
          setRecotrace: () => false,
          setSkipCache: () => false,
          setDev: () => false,
          setDebugState: () => false,
          clear: () => false,
          isDebug: () => false,
          isRecotraceEnabled: () => false,
          skipCache: () => false,
          getDebugState: () => undefined,
          isBot: () => false
        }
      }
    }
  }
}

function mergeWithDefaults(mock: MockAPI = {}): MockAPI {
  const { internal, ...defaults } = mockDefaults()
  return {
    ...defaults,
    ...mock,
    internal: {
      ...internal,
      ...mock.internal
    }
  }
}

/**
 * Replaces the `nostojs` and `window.nostojs` functions with a mock implementation.
 */
export function mockNostojs(mock?: MockAPI, nostoWindow: MockWindow = mockWindow()) {
  if (!originalNostojs) {
    originalNostojs = window.nostojs
  }
  if (!originalNosto) {
    originalNosto = window.nosto
  }
  const fullMock = mergeWithDefaults(mock)
  window.nostojs = (callback: NostojsCallback) => callback(fullMock as unknown as API) as Promise<unknown>
  // @ts-expect-error nostoWindow is a partial mock
  window.nosto = nostoWindow
}

/**
 * Restores the original implementation for `nostojs` and `window.nostojs`.
 */
export function restoreNostojs() {
  window.nostojs = originalNostojs
  window.nosto = originalNosto
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
