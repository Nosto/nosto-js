type ValidName = `nosto.${string}`

/**
 * Measures the time between the start and end of a given operation.
 *
 * A measurement done with this utility function will appear in Debug Toolbar.
 *
 * @param name Should be in the format `nosto.${string}`.
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
