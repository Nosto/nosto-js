import { SearchProduct, SearchProductSku } from "../client/nosto"
import { CurrencyConfig, getCurrencyFormatting } from "./currencies"

type Prices = Pick<SearchProduct, "price" | "listPrice">

type FormattedPrices = {
  priceText?: string
  listPriceText?: string
}

/**
 * Exposes currency formatting logic as a SearchProduct decorator
 */
export function priceDecorator(config?: Partial<CurrencyConfig>) {
  const { formatCurrency } = getCurrencyFormatting(config)

  function formatPrices<T extends Prices>(obj: T, currency?: string) {
    const formatted: FormattedPrices = {}
    if (obj.price !== undefined) {
      formatted.priceText = formatCurrency(obj.price, currency)
    }
    if (obj.listPrice !== undefined) {
      formatted.listPriceText = formatCurrency(obj.listPrice, currency)
    }
    return Object.assign({}, obj, formatted)
  }

  function hasPrices(obj: Prices) {
    return obj.price !== undefined || obj.listPrice !== undefined
  }

  type Result = SearchProduct &
    FormattedPrices & {
      skus?: (SearchProductSku & FormattedPrices)[]
    }

  return function decorator(hit: SearchProduct): Result {
    if (hasPrices(hit)) {
      const copy = formatPrices(hit, hit.priceCurrencyCode)
      if (copy.skus && copy.skus.some(hasPrices)) {
        copy.skus = copy.skus.map(sku => {
          if (hasPrices(sku)) {
            return formatPrices(sku, hit.priceCurrencyCode)
          }
          return sku
        })
      }
      return copy
    }
    return hit
  }
}
