/**
 * Checks if Nosto is loaded on the page.
 */
export function isNostoLoaded() {
  return typeof window.nosto !== "undefined"
}

/**
 * Gets the correctly typed Nosto object.
 */
export function getNostoWindow() {
  return window.nosto
}
