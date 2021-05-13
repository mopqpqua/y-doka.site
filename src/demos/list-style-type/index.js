const SELECTORS = {
  list: ".list",
  listItems: ".list__item",
  headerCode: ".header code",
}

const list = document.querySelector(SELECTORS.list)
const listItems = Array.from(document.querySelectorAll(SELECTORS.listItems))
const headerCode = document.querySelector(SELECTORS.headerCode)

listItems.forEach((listItem) =>
  listItem.addEventListener("mouseover", () => {
    list.classList.add("paused")
    changeListType(listItem)
  })
)

list.addEventListener("mouseleave", () => list.classList.remove("paused"))

function cycle() {
  if (list.classList.contains("paused")) return
  let index = listItems.findIndex((listItem) =>
    listItem.classList.contains("list__item_active")
  )
  if (index != -1) {
    listItems[index].classList.remove("list__item_active")
    listItems[index].classList.add("list__item_inactive")
    const nextItem = listItems[index + 1] || listItems[0]
    changeListType(nextItem)
  }
}

function changeListType(item) {
  const listType = item.dataset.type
  headerCode.innerHTML = `ul { list-style-type: ${listType} }`
  list.style.listStyleType = listType
  listItems.forEach((listItem) =>
    listItem.classList.remove("list__item_active")
  )
  item.classList.add("list__item_active")
}

let timerId
const observer = new IntersectionObserver((entries) => {
  if (entries[0].intersectionRatio > 0) {
    timerId = setInterval(cycle, 1200)
  } else {
    clearInterval(timerId)
  }
})
const target = document.querySelector("body")
observer.observe(target)
