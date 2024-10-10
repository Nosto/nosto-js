import { NostoWindow } from "../types"

export function getNostoWindow(): NostoWindow {
  if (typeof window.nosto === "undefined") {
    throw new Error("Nosto is not defined")
  }
  return window.nosto as NostoWindow
}

export function getNostoWindowOrDefault(): NostoWindow | undefined {
  return (window.nosto as NostoWindow) ?? undefined
}
