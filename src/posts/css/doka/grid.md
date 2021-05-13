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

### `none`

Значение по умолчанию. Это ключевое слово сбрасывает значения для всех свойств, входящих в этот шорткат.

```css
.item {
  display: grid;
  grid: none;
}
```

### Значение для `grid-template`

Можно указать допустимые значения для шортката [`grid-template`](/css/doka/grid-template):

```css
.item {
  display: grid;
  grid: repeat(4, 150px) / 1fr 200px 1fr;
}
```

В том числе можно указать имена для линий:

```css
.item {
  display: grid;
  grid:
    [row1-start] 25px [row1-end row2-start] 25px [row2-end] /
    auto 50px auto;
}
```

### Размеры колонок и рядов

Создадим два ряда и две колонки:

```css
.item {
  display: grid;
  grid: 200px 100px / 30% 30%;
}
```

### `auto-flow`

Ключевое слово `auto-flow` даёт браузеру понять, что создавать при необходимости: колонки или ряды.

Если `auto-flow` стоит справа от слэша, то будут создаваться автоматические колонки:

```css
.item {
  display: grid;
  grid: 200px 100px / auto-flow 30%;
}
```

Если `auto-flow` стоит слева от слэша, то будут создаваться автоматические ряды:

```css
.item {
  display: grid;
  grid:  auto-flow 30% / 200px 100px;
}
```

### `dense`

К ключевому слову `auto-flow` можно добавить `dense`. Оно укажет браузеру, что элементы должны стараться заполнить свободные ячейки. Подробнее про работу этого ключевого слова можно почитать в статье про [`grid-auto-flow`](/css/doka/grid-auto-flow).

Важно ставить это слово сразу после `auto-flow`:

```css
.item {
  display: grid;
  grid:  auto-flow dense 30% / 200px 100px;
}
```

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
