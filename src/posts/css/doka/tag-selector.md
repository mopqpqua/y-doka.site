---
title: "Селектор по тегу"
name: tag-selector
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - селектор
---

## Кратко

Селектор по тегу находит элемент на странице по имени тега.

## Пример

```html
<span>Немного текста</span>
<ul>
  <li>Взять носки</li>
  <li><span>Взять документы</span></li>
  <li>Взять топор</li>
</ul>
<p>Немного <span>другого</span> текста</p>
```

```css
span {
  background-color: chocolate;
}
```

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="ezhkov" data-slug-hash="JjRoLBa" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="tag selector">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/JjRoLBa">
  tag selector</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

## Как пишется

```css
тег { стили }
```

## Как это понять

Когда нужно применить одни и те же правила к определенным тегам, используется селектор по тегу. Он применяется ко всем тегам с данным названием вне зависимости от вложенности.

## Подсказки

:::callout ❗

Старайтесь не злоупотреблять селектором по тегу из-за его очень широкого охвата. Правила, написанные для тега, будут применены ко всем таким тегам на странице вне зависимости от вложенности и заданных атрибутов. Это может привести к нежелательным последствиям.

:::

Яркий пример — мы задали стиль подчеркивания для всех ссылок при помощи селектора по тегу:

```css
a {
  text-decoration: none; /* Убрали встроенное подчеркивание */
  border-bottom: 1px dashed coral; /* Имитировали пунктирное подчеркивание при помощи нижней рамки */
}
```

И это повлечёт за собой появление нижнего подчеркивания не только у текстовых ссылок, но и любых других (например, ссылок с иконкой, либо ссылочных картинок).

## В работе

🛠 Чаще всего этот селектор применяется в самом начале работы над страницей, чтобы переопределить встроенные стили браузера для некоторых тегов. Например, сразу определить стили для тегов заголовков или задать внешний вид для списков.

```css
h1,
h2,
h3 {
  font-weight: 500;
}

p {
  margin-bottom: 0.5em;
}
```

🛠 Селекторы по тегам активно используются в техниках сброса и нормализации стилей.

```css
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure {
  margin: 0;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

button {
  border: none;
  background-color: transparent;
  padding: 0;
}
```

{% include "authors/ezhkov_d/author.njk" %}
