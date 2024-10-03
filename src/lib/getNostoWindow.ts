import { NostoWindow } from "../types"

export function getNostoWindow() {
  return (window.nosto as NostoWindow) ?? undefined
}
