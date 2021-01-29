---
title: Псевдоклассы
name: pseudo-classes
author: Roman_Ganin
co-authors:
designers:
contributors:
summary:
  - псевдокласс
  - pseudo-classes
  - селекторы
  - :active
  - :any
  - :any-link
  - :link
  - :visited
  - :checked
  - :default
  - :dir
  - :disabled
  - :enabled
  - :empty
  - :first
  - :first-child
  - :last-child
  - :nth-child
  - :nth-last-child
  - :only-child
  - :first-of-type
  - :nth-of-type
  - :last-of-type
  - :nth-last-of-type
  - :only-of-type
  - :fullscreen
  - :focus
  - :focus-within
  - :has
  - :hover
  - :indeterminate
  - :in-range
  - :out-of-range
  - :lang
  - :left
  - :right
  - :not
  - :optional
  - :required
  - :read-only
  - :read-write
  - :root
  - :target
  - :valid
  - :invalid
---

## Кратко

Псевдоклассы — особый вид селектора, который уточняет тип или состояние. Обычно это какой-то качественный признак: реакция на наведение курсора, порядок следования и другие.

## Пример

CSS для подсветки строки таблицы при наведении курсора:

```css
tr {
  /* В обычном состоянии цвет фон — белый */
  background: #fff;
}

tr:hover { /* При наведении курсора… */
  background: #c3bff5; /* …цвет фона изменится на голубой */
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="wvzgJWP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="table:hover">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/wvzgJWP">
  table:hover</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Как это понять

Благодаря псевдоклассам мы можем контролировать _динамические_ параметры селекторов, то есть эти свойства сработают тогда, когда селектор **подходит** под дополнительный признак, не зависящий от уровня вложенности.

## Как пишется

```css
[селектор]:псевдокласс {
  свойство: значение;
}
```

Селектор может и отсутствовать — тогда правило применится ко всем элементам, которые могут иметь признак этого псевдокласса (например, запись `:focus {}` применится к любому элементу, который будет выделен с помощью навигации по клавише <kbd>Tab</kbd> с клавиатуры).

<!-- TODO: перелинковать со статьями, которые уже написаны -->

### `:active` ([основная статья](/posts/css/doka/active))

Применяется к интерактивным элементам в момент взаимодействия (например, нажатая кнопка).

### `:is()`

Экспериментальный селектор (пока в черновиках спецификции). Позволяет сгруппировть схожие селекторы вместо последовательного перечисления через запятую. При группировке большого количества селекторов это может существенно сократить, а главное — упростить написание:

вместо

```css
/* на глубине 3 (или больше) неупорядоченные списки используют square */
ol ol ul,     ol ul ul,     ol menu ul,     ol dir ul,
ol ol menu,   ol ul menu,   ol menu menu,   ol dir menu,
ol ol dir,    ol ul dir,    ol menu dir,    ol dir dir,
ul ol ul,     ul ul ul,     ul menu ul,     ul dir ul,
ul ol menu,   ul ul menu,   ul menu menu,   ul dir menu,
ul ol dir,    ul ul dir,    ul menu dir,    ul dir dir,
menu ol ul,   menu ul ul,   menu menu ul,   menu dir ul,
menu ol menu, menu ul menu, menu menu menu, menu dir menu,
menu ol dir,  menu ul dir,  menu menu dir,  menu dir dir,
dir ol ul,    dir ul ul,    dir menu ul,    dir dir ul,
dir ol menu,  dir ul menu,  dir menu menu,  dir dir menu,
dir ol dir,   dir ul dir,   dir menu dir,   dir dir dir {
  list-style-type: square;
}
```

с `:is()` это можно описать как

```css
/* на глубине 3 (или больше) неупорядоченные списки используют square */
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) ul,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) menu,
:is(ol, ul, menu, dir) :is(ol, ul, menu, dir) dir {
  list-style-type: square;
}
```

### `:any-link` / `:link` ([основная статья](/posts/css/doka/link)) / `:visited` ([основная статья](/posts/css/doka/visited))

Применяется ко всем элементам,которые могут иметь атрибут `href` (`<a>`, `<area>` и `<link>`). `:link` характеризует ещё не посещённые страницы, `:visited` — наоборот, посещённые (в рамках одного домена).

### `:checked` ([основная статья](/posts/css/doka/checked))

Применяется к элементам, состояние которых меняется с помощью атрибута `checked`.

### `:default`

Находит элемент формы (`<input type="radio">`, `<input type="checkbox">`, `<option>`, `<button>`), установленный по умолчанию для группы связаных элементов (например, в случае с `<input type="checkbox">` селектор применится к тому чекбоксу, у которого в разметке установлен атрибут `checked`, т. е. он **по умолчанию** выбран):

<p class="codepen" data-height="304" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="rNMGbZw" style="height: 304px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":default">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/rNMGbZw">
  :default</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:dir()`

Позволяет найти элементы по направлению текста в нём (например, в арабском направление письма идёт справа на лево). К сожалению, пока свойство поддерживается только в Firefox.

### `:disabled` / `:enabled`

Позволяет находить элементы формы по состоянию их атрибута `disabled`. _Почти_ эквивалентны селекторам по атрибуту (`[disabled] {}` и `:not([disabled])` соответсвенно), но более гибкие, т. к. среагируют на наследуемое состояние родителя-`<fieldset>`'а (если у `<fieldset>` задать атрибут `disabled`, то он применится ко всем контролам внутри).

<p class="codepen" data-height="350" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="bGwoPvx" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":disabled / :enabled">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/bGwoPvx">
  :disabled / :enabled</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:empty`

Применяется к элементам, у которых внутри нет других тегов или текста. Например, можно проверить, что у кнопки не задан текст или иконка, чтобы задать минимальные размеры (хотя, для этого можно использовать и `min-width` / `min-height`):

<p class="codepen" data-height="557" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="zYKPqWm" style="height: 557px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":empty">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/zYKPqWm">
  :empty</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:first-child` / `:last-child` / `:nth-child()` / `:nth-last-child()` / `:only-child` ([основная статья](/posts/css/doka/child))

Селекторы элемента по его положению относительно родителя (первый, последний, n-ый, единственный).

### `:first-of-type` / `:nth-of-type()` / `:last-of-type` / `:nth-last-of-type()` / `:only-of-type` ([основная статья](/posts/css/doka/nth-of-type))

Селектор по типу внутри одного родителя.

### `:fullscreen`

Признак того, что документ развернули на всё окно (с помощью JavaScript).

```css
/* скроем панель управления у плеера, */
/* если он развёрнут на весь экран */

.player:fullscreen .player__controls {
  display: none;
}
```

### `:focus` ([основная статья](/posts/css/doka/focus)) / `:focus-within`

Элемент, который сейчас находится в фокусе (с помощью клавиши <kbd>Tab</kbd>). А `:focus-within` ещё обозначает элемент, внутри которого находится элемент в фокусе.

### `:has()` ([основная статья](/posts/css/doka/has))

Позволяет уточнить селектор, передав в аргумент отношение к элементу, к которому применятся псевдокласс `:has()`. К сожалению, пока с поддержкой всё очень плохо — ни один браузер ещё не внедрил его поддержку.

### `:hover` ([основная статья](/posts/css/doka/hover))

Элемент, на который сейчас навели курсор.

### `:indeterminate`

Элементы, который могут находиться в «промежуточном» состоянии:
- `<input type="checkbox">`, отображающий, что не все пункты вложенной группы были выделены;
- группа `<input type="radio">` с одинаковым `name`, но у которой ни один элемент не установлен в `checked`;
- `<progress>`.

Для `<input>` indeterminate-состояние в HTML можно задать только через JavaScript.

<p class="codepen" data-height="249" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="JjROXzQ" style="height: 249px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":indeterminate">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/JjROXzQ">
  :indeterminate</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:in-range` / `:out-of-range`

Применяется для `<input>`, у которого определены атрибуты `min` и `max` и введённое значение соответсвует (`:in-range`) или нет (`:out-of-range`) этому диапазону.

<p class="codepen" data-height="251" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="vYXWKWm" style="height: 251px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":in-range / :out-of-range">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/vYXWKWm">
  :in-range / :out-of-range</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:lang()`

Селектор по языку содержимого текста. В HTML есть атрибут lang, который указывает на язык содержимого, этот псевдокласс позволяет обратиться к элементу по содержимому этого атрибута:

```css

<style>
  /* Например, в арабском языке нет переносов */
  :lang(ar) {
    hyphens: none;
  }
<style>

```

### `:not()`

Находит элемент, которые **не соответсвует** селектору, который передан в качестве аргумента. Очень мощный псевдокласс, позволяющий писать эффективные CSS-селекторы:

```css
/* выделим красной рамкой все <img>, */
/* которым забыли прописать атрибут alt */

img:not([alt]) {
  outline: 2px solid red;
}
```

### `:optional` / `:required` ([основная статья](/posts/css/doka/required)

`:optional` находит любой `<input>`, у которого не устновлен атрибут `required` — то есть находит необязтельные поля ввода. А `:required` — наоборот, те `<input>`, у которых есть этот атрибут.

### `:read-only` / `:read-write`

Находит элементы, недоступные (`:read-only`) или наоборот (`:read-write`) для редактирования (например, в зависимости от наличия атрибута `disabled` или `readonly`).

### `:root`([основная статья](/posts/css/doka/root)

Соответсвует корневому тегу-элементу документа. Для HTML это, соответсвенно, `<html>`, для SVG — `<svg>`, но выше по специфичности, чем просто селектор по тегу.

### `:target`

Селектор, который применится к элементу, `id` которого используется как якорная ссылка на фрагмент (например, на текущий блок можо сослаться по `<a href="#target">#:target</a>`, а когда упоминание этого `id` будет в строке браузера, применятся стили, описанные в `:target`).

### `:valid` / `:invalid` ([основная статья](/posts/css/doka/invalid-valid)

Селектор `:valid` соответсвует `<input>` или `<form>`-элементу, контент которого валиден в соответствии с типом поля. Обратный эффект у `:invalid` — сработает при ошибке HTML-валидации.

## Подсказки

💡 Псевдоклассы не обязательно описываются вместе с элементом — если он не указан, селектор будет обозначать любой доступный элемент, который *может иметь* этот псевдокласс (при активации нужного состояния).

💡 Псевдокласс может быть описан у любого элемента при написании селектора, т. е. если задать его родителю, то можно стилизовть дочерний элемент при изменении состояния у родителя:

```css
/* если курсор находится внутри <nav>, */
/* увеличить размер шрифта у вложенных ссылок */

nav:hover a {
  font-size: 120%;
}
```

## В работе

🛠 Понимание изменения состояния элементов и  манипулирование им через псевдоклассы помогает делать производительные интерфейсы даже без JavaScript или, например, создавать собственный стиль для контролов формы:

<p class="codepen" data-height="290" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="KKgXmgX" data-preview="true" style="height: 290px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Кастомный чекбокс">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/KKgXmgX">
  Кастомный чекбокс</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{% include "authors/Roman_Ganin/author.njk" %}