import { Settings } from "../client/nosto"

/**
 * Checks if Nosto is loaded on the page.
 */
export function isNostoLoaded() {
  return typeof window.nosto !== "undefined"
}

/**
 * Reloads Nosto with the given settings, useful for development purposes.
 *
 * @param settings Settings to override.
 */
export function reloadNosto(settings: Partial<Settings>) {
  if (window.nosto) {
    window.nosto.reload(settings)
  }
}

/**
 * Gets the correctly typed Nosto object.
 */
export function getNostoWindow() {
  return window.nosto
}
