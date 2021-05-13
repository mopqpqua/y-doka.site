const SELECTORS = {
  demo: ".js-demo",
  radios: ".js-b-size",
}

const demoContainer = document.querySelector(SELECTORS.demo)
const radios = document.querySelectorAll(SELECTORS.radios)

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    demoContainer.style.backgroundSize = `${event.target.value}px`
  })
})
