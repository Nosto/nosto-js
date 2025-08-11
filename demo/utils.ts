import { reloadNosto } from "../src/testing"

export function bypassLocalhostBlock() {
  const interval = setInterval(() => {
    const reloadSuccessful = reloadNosto({
      site: location.hostname,
      searchApiUrl: "https://search.nosto.com/api/",
      searchEnabled: false
    })
    if (reloadSuccessful) {
      clearInterval(interval)
    }
  }, 100)
}
