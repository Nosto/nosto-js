export function getNostoWindow() {
  if (typeof window.nosto === "undefined") {
    throw new Error("Nosto is not defined")
  }
  return window.nosto
}

export function getNostoWindowOrDefault() {
  return window.nosto
}
