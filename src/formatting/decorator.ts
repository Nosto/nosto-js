import { SearchProduct, SearchProductSku } from "../client/nosto"
import { CurrencyConfig, formatCurrency, setFormattingConfig } from "./currencies"

type Prices = Pick<SearchProduct, "price" | "listPrice">

type FormattedPrices = {
  priceText?: string
  listPriceText?: string
}

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

function decorator(hit: SearchProduct): Result {
  if (hasPrices(hit)) {
    const copy = formatPrices(hit, hit.priceCurrencyCode)
    if (copy.skus) {
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

/**
 * Exposes currency formatting logic as a SearchProduct decorator
 */
export function priceDecorator(config?: Partial<CurrencyConfig>) {
  setFormattingConfig(config ?? {})
  return decorator
}
