interface Window {
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
