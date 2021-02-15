---
title: "gap"
name: gap
author: ABatickaya
summary:
  - отступы между грид-ячейками
  - шорткат
---

## Кратко

Шорткат для записи значений свойств `row-gap` и `column-gap`. Значения разделяются слэшем `/`.

## Пример

```css
.container {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  grid-template-rows: repeat(3, 150px);
  gap: 50px / 10px;
}
```

## Как пишется

Указываете два значения размера в любых единицах измерения, разделяя их слэшем. Первым указывается значение отступа для рядов, за ним значение отступа для колонок.

## Подсказки

💡 Есть старое свойство-аналог для браузеров старше Chrome 68+, Safari 11.2 50+ и Opera 54+: `grid-gap`.

:::callout 📝

Полный список свойств гридов можно посмотреть в [гайде по grid](/css/long/grid-guide/).

:::

{% include "authors/ABatickaya/author.njk" %}
