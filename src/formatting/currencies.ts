import { CurrencyFormats } from "../client/nosto"
import { nostojs } from "../lib/nostojs"

const config = {
  defaultCurrency: "EUR",
  defaultLocale: "en-US",
  /** @hidden  */
  currencySettings: {} as CurrencyFormats
}

const currencyLocales: Record<string, string> = {
  EUR: "de-DE",
  GBP: "en-GB",
  USD: "en-US",
  AUD: "en-AU",
  CAD: "en-CA",
  //India, Afghanistan, Bangladesh, Bhutan, Myanmar, Nepal, and Pakistan uses lakhs and crores notation
  INR: "en-IN",
  AFN: "en-IN",
  BDT: "en-IN",
  BTN: "en-IN",
  MMK: "en-IN",
  NPR: "en-IN",
  PKR: "en-IN"
}

/**
 * Initialize the currency formatting settings.
 */
export function setFormattingConfig(overrides: Partial<typeof config>) {
  Object.assign(config, overrides)

  // load currency settings from nosto if none have been provided
  if (!overrides.currencySettings) {
    nostojs(api => {
      config.currencySettings = api.internal.getSettings().currencySettings
    })
  }
}

/**
 * Format the given monetary value using the Nosto currency settings.
 */
export function formatCurrency(value: number, currency?: string) {
  const { defaultCurrency, currencySettings } = config
  const currencyCode = currency ?? defaultCurrency
  const locale = currencyLocales[currencyCode] ?? config.defaultLocale

  if (currencyCode in currencySettings) {
    // formatting using Nosto settings
    const settings = currencySettings[currencyCode]!
    const result = new Intl.NumberFormat(locale, {
      useGrouping: !!settings.groupingSeparator,
      minimumFractionDigits: settings.decimalPlaces,
      maximumFractionDigits: settings.decimalPlaces
    }).formatToParts(value)

    const normalised = result
      .map(it => {
        if (it.type === "group") return settings.groupingSeparator
        if (it.type === "decimal") return settings.decimalCharacter
        return it.value
      })
      .join("")

    if (settings?.currencyBeforeAmount) {
      return `${settings.currencyToken}${normalised}`
    }
    return `${normalised}${settings?.currencyToken}`
  }

  // fallback logic
  const numberFormat = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode
  })
  return numberFormat.format(value)
}
