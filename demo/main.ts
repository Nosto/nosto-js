import { init, nostojs } from "../src"
import { bypassLocalhostBlock } from "./utils"

async function main() {
  bypassLocalhostBlock()

  await init({
    merchantId: "shopify-15195932",
    env: "production"
  })
  console.info("Nosto client script ready")

  await nostojs(async api => {
    const recommendations = await api.loadRecommendations()
    console.info(recommendations)
  })
}
main()
