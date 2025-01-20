import type { Settings } from "../client/nosto"
import { initNostoStub } from "../utils/dom"
import { nostojs } from "./nostojs"

let settings: Settings | null = null

if (typeof window !== "undefined") {
  initNostoStub()
  nostojs(api => {
    settings = api.internal.getSettings()
  })
}

export function getSettings() {
  return settings
}

export function setSettingsInternal(newSettings: Settings) {
  settings = newSettings
}
