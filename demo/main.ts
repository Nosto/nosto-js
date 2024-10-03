import { init, nostoApi } from "../src"
import { bypassLocalhostBlock } from "./utils"

async function main() {
  bypassLocalhostBlock()

  await init({
    merchantId: "shopify-15138164",
    pageType: "front",
    env: "production"
  })
  console.info("Nosto client script ready")

  await nostoApi(async api => {
    const recommendations = await api.loadRecommendations()
    console.info(recommendations)
  })
}
main()
