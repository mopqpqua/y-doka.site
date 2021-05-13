---
title: "place-items"
name: place-items
author: ABatickaya
contributors:
  - corocoto
summary:
  - выравнивание в гридах
  - шорткат
---

## Кратко

Шорткат для указания значений сразу и для `align-items` и для `justify-items`. Указывать нужно именно в таком порядке.

## Пример

```css
.container {
  display: grid;
  place-items: stretch end;
}
```

## Как пишется

Пишутся два доступных значения для свойств [`align-items`](/css/doka/align-items) и [`justify-items`](/css/doka/justify-items), разделённые пробелом.

## Подсказки

:::callout 📝

Полный список свойств гридов можно посмотреть в [гайде по grid](/css/long/grid-guide/).

:::

{% include "authors/ABatickaya/author.njk" %}
