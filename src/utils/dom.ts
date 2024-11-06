import { NostojsCallback } from "../client/nosto"

/**
 * Initializes the Nosto client stub on the page.
 */
export function initNostoStub() {
  window.nostojs =
    window.nostojs ??
    function (callback: NostojsCallback) {
      ;(window.nostojs.q = window.nostojs.q ?? []).push(callback)
    }
}
