import { API } from "../client/nosto"

export function initNostoStub() {
  window.nostojs =
    window.nostojs ??
    function (callback: (api: API) => unknown) {
      ;(window.nostojs.q = window.nostojs.q ?? []).push(callback)
    }
}
