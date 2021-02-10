---
title: "<legend>"
name: legend
author: Roman_Ganin
co-authors:
designers:
contributors: skorobaeus
summary:
  - legend
  - <legend>
  - тэг
  - тег
  - fieldset
  - <fieldset>
  - форма
---

## Кратко

Добавляет заголовок в [`<fieldset>`](/html/doka/fieldset), который по умолчанию оформляется брузером как текст, органично вписанный в рамку.
## Пример

```html
<fieldset>
  <legend>Заголовок для группы контролов</legend>
  …
</fieldset>
```

## Как это понять

`<legend>` позволяет описать содержимое `<fieldset>`, но семантически он не является «представителем» h1-h6-заголовков, хотя выполняет схожую функцию, только без задания иерархии, а лишь характеризуя контент внутри «своей» группы — как `<label>` для соответствующего контрола.

## Как пишется

**Важно**, чтобы `<legend>` был первым дочерним элементом внутри `<fieldset>`.

## Атрибуты

У `<legend>` нет никаких «своих» атрибутов, ему доступны все *глобальные атрибуты*. Но для выравнивания текста по краю или по центру не обойтись без атрибута `align` (CSS-свойство `text-align` работать не будет, даже если задать `display: block`):

```html
<fieldset>
  <legend align="center">Заголовок для группы контролов</legend>
  …
</fieldset>
```

## Подсказки

Внешний вид оформления рамки по умолчанию у `<legend>` немного отличается в зависимости от браузера и операционной системы:

## Атрибуты

У `<legend>` нет никаких «своих» атрибутов, ему доступны все [глобальные атрибуты](/html/doka/global-attrs).


<table>
  <thead>
    <tr>
      <th>
        Windows 10, Edge 18.0
      </th>
      <th>
        MacOS Big Sur, Safari 14.0
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="/assets/images/posts/fieldset/win10_edge_18.0.png" alt="">
      </td>
      <td>
        <img src="/assets/images/posts/fieldset/macbsr_safari_14.0.jpg" alt="">
      </td>
    </tr>
  </tbody>
</table>


<table>
  <thead>
    <tr>
      <th>
        Windows 8, Internet Explorer 10.0
      </th>
      <th>
        Windows 7, Internet Explorer 9.0
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="/assets/images/posts/fieldset/win8_ie_10.0.png" alt="">
      </td>
      <td>
        <img src="/assets/images/posts/fieldset/win7_ie_9.0.png" alt="">
      </td>
    </tr>
  </tbody>
</table>


<table>
  <thead>
    <tr>
      <th>
        Samsung Galaxy S7
      </th>
      <th>
        Google Nexus 6
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <img src="/assets/images/posts/fieldset/6.0_Samsung-Galaxy-S7_portrait_real-mobile.png" alt="">
      </td>
      <td>
        <img src="/assets/images/posts/fieldset/6.0_Google-Nexus-6_portrait_real-mobile.png" alt="">
      </td>
    </tr>
  </tbody>
</table>

За счёт особой формы «обтекания» рамкой текста, это можно использовать для характерной стилизации блока и заголовка:

<p class="codepen" data-height="347" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="BaLybry" data-preview="true" style="height: 347px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;legend&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/BaLybry">
  &lt;legend&gt;</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
