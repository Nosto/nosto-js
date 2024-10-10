import { nostojs, Settings } from "./client/nosto"

export type BackendEnvironment = "production" | "staging" | "local"

export type NostoWindow = Window & {
  fbq: (...args: unknown[]) => void

  // nosto additions
  _targetWindow: Window
  nosto: Window
  nostoab: { settings: Settings }
  nostojs: nostojs
  reload: (options: Partial<Settings>) => void

  // Search additions
  nostoTemplatesLoaded: boolean
  nostoTemplatesConfig: {
    merchant: string
    defaultCurrency: string
  }
}

export type ScriptLoadOptions = {
  /**
   * Indicates the position of the script, default is "body"
   */
  position?: "head" | "body"
  /**
   * Indicates the attributes of the script element
   */
  attributes?: Record<string, string>
}
