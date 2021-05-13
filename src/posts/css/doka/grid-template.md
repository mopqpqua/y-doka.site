---
title: "grid-template"
name: grid-template
author: ABatickaya
summary:
  - шорткат
---

## Кратко

Свойство-шорткат для свойств `grid-template-rows`, `grid-template-columns`. Позволяет записать все значения в одну строку. Главное после этого не запутаться при чтении 😅

## Пример

Будет создано 4 ряда по 150 пикселей и три колонки: 1fr, 200 пикселей и 1fr по размерам:

```css
.container {
  display: grid;
  grid-template: repeat(4, 150px) / 1fr 200px 1fr;
}
```

## Как пишется

Можно прописать все колонки и ряды сразу, разделяя их слэшем `/`. Сперва идут ряды, а затем колонки, не перепутайте!

Используйте все доступные значения свойств [`grid-template-rows`](/css/doka/grid-template-rows) и [`grid-template-columns`](/css/doka/grid-template-columns), разделяя их слэшем.

## Подсказки

:::callout 📝

Полный список свойств гридов можно посмотреть в [гайде по grid](/css/long/grid-guide/).

:::

## В работе

🛠 В этом же свойстве можно задавать значение и для `grid-template-areas`. Но, на мой взгляд, тогда код превращается в кашу и становится совершенно нечитабельным. Лучше всё же использовать это свойство отдельно:

Лучше так?

```css
.container {
  display: grid;
  grid-template:
    [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

Или так?

```css
.container {
  display: grid;
  grid-template:
    [row1-start] 25px [row1-end]
    [row2-start] 25px [row2-end]
    / auto 50px auto;
  grid-template-areas:
    "header header header"
    "footer footer footer";
}
```

Но техническая возможность есть, выбирать вам! 😉

{% include "authors/ABatickaya/author.njk" %}
