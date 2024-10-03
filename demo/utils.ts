import { getNostoWindow } from "../src"

export function bypassLocalhostBlock() {
  const interval = setInterval(() => {
    if (getNostoWindow() && "reload" in getNostoWindow()) {
      clearInterval(interval)
      getNostoWindow().reload({
        site: location.hostname,
        searchApiUrl: "https://search.nosto.com/api/",
        searchEnabled: false
      })
    }
  }, 100)
}
