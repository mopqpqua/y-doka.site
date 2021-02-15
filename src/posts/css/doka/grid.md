---
title: "grid"
name: grid
author: ABatickaya
summary:
  - шорткат
---

## Кратко

Мега-шорткат, позволяющий задать значения всему и сразу. А конкретно с его помощью можно указать значения для следующих свойств:

- [`grid-template-rows`](/css/doka/grid-template-rows)
- [`grid-template-columns`](/css/doka/grid-template-columns)
- [`grid-template-areas`](/css/doka/grid-template-areas)
- [`grid-auto-rows`](/css/doka/grid-auto-columns-rows)
- [`grid-auto-columns`](/css/doka/grid-auto-columns-rows)
- [`grid-auto-flow`](/css/doka/grid-auto-flow)

## Пример

Такой блок кода:
```css
.container {
  grid: 50px 150px / 2fr 1fr;
}
```

...будет аналогичен этому коду:
```css
.container {
  grid-template-rows: 50px 150px;
  grid-template-columns: 2fr 1fr;
}
```

## Как пишется

- `none` (значение по умолчанию) — очевидно что ничего не происходит. Можно использовать для сброса ранее заданного значения.
- `grid-template` — работает аналогично одноимённому одиночному свойству.
- `grid-template-rows` / [ auto-flow && dense? ] `grid-auto-columns`? — задаёт конкретные размеры рядам. Если справа от слэша стоит ключевое слово `auto-flow`, то для свойства `grid-auto-flow` будет установлено значение `column`. Если после этого написать ключевое слово `dense`, то оно будет добавлено к значению `grid-auto-flow`. Если значение для `grid-auto-columns` не указано явно, то устанавливается значение `auto`.
- [ auto-flow && dense? ] `grid-auto-rows`? / `grid-template-columns` — задаёт конкретные размеры колонкам. Если слева от слэша стоит ключевое слово `auto-flow`, то для свойства `grid-auto-flow` будет установлено значение `row`. Если после этого написать ключевое слово `dense`, то оно будет добавлено к значению `grid-auto-flow`. Если значение для `grid-auto-row` не указано явно, то устанавливается значение `auto`.

## Подсказки

💡 Перед тем как соблазнится возможностью расписать всё в одном свойстве, дважды (а то и трижды) подумайте о читабельности кода. Учтите и то, что гриды относительно новая и не такая уж простая технология. Не каждый коллега сможет прочесть этот шорткат.

:::callout 📝

Полный список свойств гридов можно посмотреть в [гайде по grid](/css/long/grid-guide/).

:::

## В работе

🛠 Возможны и более сложные комбинации значений этого свойства. Например, можно сразу задать имена областям:

```css
.container {
  grid:
    [row1-start] "header header header" 1fr [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
}
```

Что аналогично:
```css
.container {
  grid-template-areas:
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
}
```

{% include "authors/ABatickaya/author.njk" %}
