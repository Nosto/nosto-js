import type { isNostoLoaded } from "../lib/helpers"

/**
 * Mock state for testing. If present, will be returned instead of the real state.
 */
export const MockState = {
  isNostoLoaded: null as ReturnType<typeof isNostoLoaded> | null
}
