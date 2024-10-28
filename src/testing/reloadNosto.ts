import { Settings } from "../client/nosto"

/**
 * Reloads Nosto with the given settings, useful for development purposes.
 * Will not perform a reload if Nosto is not yet ready.
 *
 * @param settings Settings to override.
 * @returns `true` if reload is successful, `false` otherwise.
 */
export function reloadNosto(settings: Partial<Settings>) {
  if (window.nosto && "reload" in window.nosto) {
    window.nosto.reload(settings)
    return true
  }
  return false
}
