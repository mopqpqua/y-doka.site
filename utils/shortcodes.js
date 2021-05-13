const outdent = require("outdent")
const path = require("path")

module.exports = {
  icon: function (name) {
    return `<svg class="icon icon--${name}" role="img" aria-hidden="true" width="24" height="24">
                    <use xlink:href="#icon-${name}"></use>
                </svg>`
  },
  demo: function (demoName, title = "", height = 400, options = {}) {
    const { stretchVertically = true } = options
    const onLoad =
      stretchVertically &&
      "this.style.height = this.contentWindow.document.body.scrollHeight + 'px'"

    return outdent`
      <iframe
        src="${path.join("/demos", demoName)}"
        title="${title}"
        height="${height}"
        onload="${onLoad}"
        loading="lazy">
      </iframe>
    `
  },
}
