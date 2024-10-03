import { API, PageType } from "../client/nosto"

export function setPageType(pageType: PageType) {
  document.querySelectorAll(".nosto_page_type").forEach(el => el.remove())

  const div = document.createElement("div")
  div.classList.add("nosto_page_type")
  div.style.display = "none"
  div.textContent = pageType
  div.translate = false
  document.body.appendChild(div)
}

export function initNostoStub() {
  window.nostojs =
    window.nostojs ??
    function (callback: (api: API) => unknown) {
      ;(window.nostojs.q = window.nostojs.q ?? []).push(callback)
    }
}
