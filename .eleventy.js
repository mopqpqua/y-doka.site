const pluginRss = require("@11ty/eleventy-plugin-rss")
const pluginNavigation = require("@11ty/eleventy-navigation")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const markdownIt = require("markdown-it")
const markdownItAnchor = require("markdown-it-anchor")
const markdownItContainer = require("markdown-it-container")

const filters = require("./utils/filters.js")
const transforms = require("./utils/transforms.js")
const shortcodes = require("./utils/shortcodes.js")
const iconsprite = require("./utils/iconsprite.js")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const lazyImagesPlugin = require('eleventy-plugin-lazyimages')

const callout = require("./utils/markdown/callout")

module.exports = function (config) {
  // Plugins
  config.addPlugin(pluginRss)
  config.addPlugin(pluginNavigation)
  config.addPlugin(syntaxHighlight)
  config.addPlugin(eleventyNavigationPlugin)
  config.addPlugin(lazyImagesPlugin , {
    imgSelector: '.article img'
  })

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName])
  })

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    config.addTransform(transformName, transforms[transformName])
  })

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    config.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  // Icon Sprite
  config.addNunjucksAsyncShortcode("iconsprite", iconsprite)

  // Asset Watch Targets
  config.addWatchTarget("./src/assets")

  // Markdown
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  })
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "🔗",
    })
    .use(markdownItContainer, "callout", callout)

  config.setLibrary("md", markdownLibrary)

  // Layouts
  config.addLayoutAlias("base", "base.njk")
  config.addLayoutAlias("post", "post.njk")
  config.addLayoutAlias("no-aside", "no-aside.njk")
  config.addLayoutAlias("main", "main.njk")

  // Collections
  config.addCollection("searchable", (collection) =>
    collection.getFilteredByGlob("./src/posts/**/*.md")
  )

  // Sortables collections
  new Array(
    "htmlDoka",
    "htmlLong",
    "cssDoka",
    "cssLong",
    "jsDoka",
    "jsLong",
    "jsTools"
  ).forEach((collectionsName) => {
    config.addCollection(collectionsName, (collection) => {
      return collection
        .getFilteredByTag(collectionsName)
        .sort((a, b) => a.data.title.localeCompare(b.data.title))
    })
  })

  // Pass-through files
  config.addPassthroughCopy("src/robots.txt")
  config.addPassthroughCopy("src/site.webmanifest")
  config.addPassthroughCopy("src/assets/images")
  config.addPassthroughCopy("src/assets/video")
  config.addPassthroughCopy("src/assets/audio")
  config.addPassthroughCopy("src/assets/fonts")

  // Deep-Merge
  config.setDataDeepMerge(true)

  // Base Config
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      layouts: "layouts",
      data: "data",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
