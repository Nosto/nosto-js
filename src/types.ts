import { nostojs, Settings } from "./client/nosto"

export type BackendEnvironment = "production" | "staging" | "local"

/** @hidden */
export type MainWindow = Window & {
  nosto?: NostoSandbox
  nostojs: nostojs
}

/** @hidden */
export type NostoSandbox = Window & {
  _targetWindow: MainWindow
  reload: (options: Partial<Settings>) => void
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
