import { nostojs, Settings } from "./client/nosto"

export type BackendEnvironment = "production" | "staging" | "local"

export type MainWindow = Window & {
  nosto?: NostoSandbox
  nostojs: nostojs
}

export type NostoSandbox = Window & {
  _targetWindow: MainWindow
  reload: (options: Partial<Settings>) => void
}
