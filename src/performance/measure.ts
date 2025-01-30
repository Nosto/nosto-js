type ValidName = `nosto.${string}`

/**
 * Measures the time between the start and end of a given operation.
 *
 * Name of the measurement should start with `nosto.`.
 * A measurement done with this utility function will appear in Debug Toolbar.
 *
 * @returns A function that stops the measurement.
 */
export function measure(name: ValidName) {
  performance.mark(`${name}.start`)

  return () => {
    performance.mark(`${name}.end`)
    performance.measure(`${name}`, `${name}.start`, `${name}.end`)
  }
}
