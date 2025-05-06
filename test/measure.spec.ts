import { describe, it, expect, vi, afterEach } from "vitest"
import { measure } from "../src/performance"

describe("measure", () => {
  // @ts-expect-error Mocking performance API
  global.performance = {
    mark: vi.fn(),
    measure: vi.fn()
  }

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("should mark the start of the measurement when called", () => {
    const name = "nosto.testStart"
    measure(name)
    expect(performance.mark).toHaveBeenCalledWith(`${name}.start`)
  })

  it("should mark the end and measure the time when the stop function is called", () => {
    const name = "nosto.testStop"
    const stop = measure(name)
    stop()

    expect(performance.mark).toHaveBeenCalledWith(`${name}.end`)
    expect(performance.measure).toHaveBeenCalledWith(name, `${name}.start`, `${name}.end`)
  })

  it("should support multiple measurements independently", () => {
    const name1 = "nosto.first"
    const name2 = "nosto.second"

    const stop1 = measure(name1)
    const stop2 = measure(name2)

    stop1()
    stop2()

    expect(performance.mark).toHaveBeenCalledWith(`${name1}.start`)
    expect(performance.mark).toHaveBeenCalledWith(`${name2}.start`)
    expect(performance.mark).toHaveBeenCalledWith(`${name1}.end`)
    expect(performance.mark).toHaveBeenCalledWith(`${name2}.end`)
    expect(performance.measure).toHaveBeenCalledWith(name1, `${name1}.start`, `${name1}.end`)
    expect(performance.measure).toHaveBeenCalledWith(name2, `${name2}.start`, `${name2}.end`)
  })
})
