---
title: "appearance"
name: appearance
author: ezhkov_d
co-authors:
designers:
contributors:
summary:
  - appearance
  - отображение
---

## Кратко

Свойство `appearance` задаёт внешний вид элемента формы в зависимости от платформы и темы операционной системы пользователя.

## Как это понять

Свойство `appearance` используется в одном из двух случаев:

1. Чтобы убрать у элемента специфичные для платформы стили. Например, в браузере Safari на iOS поле ввода с атрибутом `type="search"` принудительно стилизуется скруглёнными углами. Чтобы обойти эти ограничения, можно задать такому полю `appearance: none`.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="wvoBLXP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="appearance">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/wvoBLXP">
  appearance</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<figure>
  <img src="/assets/images/posts/appearance/search.png" width="203" alt="Пример свойства appearance">
</figure>

Если пример открыть НЕ в мобильном браузере, то разница не заметна.

2. Чтобы применить специфичные для платформы стили к элементам, у которых этих стилей нет. В этом случае, если нам нужно, чтобы поле ввода выглядело как поле поиска, мы можем задать `appearance: searchfield`

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="abBzezO" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="appearance 2">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/abBzezO">
  appearance 2</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<figure>
  <img src="/assets/images/posts/appearance/search2.png" width="203" alt="Пример свойства appearance">
</figure>

## Как пишется

```css

appearance: none;
appearance: auto;  /* Значение по умолчанию */
appearance: menulist-button;
appearance: textfield;
appearance: button;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Перечень некоторых значений, доступных в браузерах на движке Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Перечень некоторых значений, доступных в браузерах на движке Webkit/Blink */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
```

## Подсказки

💡 Свойства `-webkit-appearance` и `-moz-appearance` — это нестандартные свойства, доступные только в браузерах на определённых движках. Свойство `-webkit-appearance` работает в браузерах на движках Webkit (Safari) и Blink (Chrome, Opera). Свойство `-moz-appearance` работает в браузерах на движке Gecko (Firefox). Браузеры Firefox и Edge кроме всего прочего поддерживают `-webkit-appearance` для совместимости.

## В работе

Сброс стандартного отображения элементов может быть полезным при применении пользовательских стилей к элементам форм:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="html,result" data-user="ezhkov" data-slug-hash="eYBmqWm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="appearance 3">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/eYBmqWm">
  appearance 3</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ezhkov_d/author.njk" %}
