import { MockState } from "../testing/mockState"

/**
 * Checks if Nosto is loaded on the page.
 */
export function isNostoLoaded(): boolean {
  if (MockState.isNostoLoaded !== null) {
    return MockState.isNostoLoaded
  }
  return typeof window.nosto !== "undefined"
}

/**
 * Gets the correctly typed Nosto object.
 */
export function getNostoWindow() {
  return window.nosto
}
