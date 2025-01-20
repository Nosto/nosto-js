import type { Settings } from "../client/nosto"
import { setSettingsInternal } from "../lib/settings"
import { mockNostojs } from "./mockNostojs"

/**
 * Mocks the internal client script settings.
 *
 * @param settings Settings to mock.
 */
export function mockSettings(settings: Partial<Settings>) {
  mockNostojs({
    internal: {
      getSettings: () => settings
    }
  })
  setSettingsInternal(settings as Settings)
}
