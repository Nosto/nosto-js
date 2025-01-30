type ValidName = `nosto.${string}`

export function measure(name: ValidName) {
  performance.mark(`${name}.start`)

  return () => {
    performance.mark(`${name}.end`)
    performance.measure(`${name}`, `${name}.start`, `${name}.end`)
  }
}
