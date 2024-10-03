import { BackendEnvironment } from "../types"

const connectNostoUrls = {
  production: "https://connect.nosto.com/",
  staging: "https://connect.staging.nosto.com/",
  local: "https://connect.nosto.com/"
}

export function getBaseUrl(env: BackendEnvironment | undefined) {
  return connectNostoUrls[env ?? "production"]
}
