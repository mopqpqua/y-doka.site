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

```html
<fieldset>
  <legend>Заголовок для группы</legend>
  …
</fieldset>
```

:::callout 💡
**Важно**, чтобы `<legend>` был первым дочерним элементом внутри `<fieldset>`. Если внутри `<fieldset>` будет больше одного `<legend>`, отобразится только первый, все остальные отобразяться как обычные блочные элементы:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Realetive" data-slug-hash="JjbRaPM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="rotate legend">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/JjbRaPM">
  rotate legend</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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


## В работе

Для выравнивания положения текста часто советуют использовать атрибут `align`, но он исключён из современной спецификации, а привычные CSS-правила, например, с `text-align: center` с `<legend>` работать не будут, т. к. у него блочный контекст, но уникальная инлайн-блочная контекстая модель содержимого, которая и создаёт неповторимую обводку от `<fieldset>`. Поэтому для выравнивания `<legend>` относительно ширины `<fieldset>` нужно использовать… внезапно [`margin`](/css/doka/margin)!

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="Realetive" data-slug-hash="PobGyGb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="legend align">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/PobGyGb">
  legend align</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

За счёт особой формы «обтекания» рамкой текста, это можно использовать для характерной стилизации блока и заголовка:

<p class="codepen" data-height="347" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="BaLybry" data-preview="true" style="height: 347px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;legend&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/BaLybry">
  &lt;legend&gt;</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
