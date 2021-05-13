---
title: "Псевдоклассы"
name: pseudo-classes
author: Roman_Ganin
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

В обычном состоянии цвет фон — белый

```css
tr {
  background: #fff;
}
```

При наведении курсора цвет фона изменится на голубой

```css
tr:hover {
  background: #c3bff5;
}
```

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="wvzgJWP" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="table:hover">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/wvzgJWP">
  table:hover</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Как это понять

Благодаря псевдоклассам мы можем контролировать _динамические_ параметры селекторов. Эти свойства сработают когда селектор **подходит** под дополнительный признак.

## Как пишется

```css
[селектор]:псевдокласс {
  свойство: значение;
}
```

Селектор может и отсутствовать. Тогда правило применится ко всем элементам, которые могут иметь признак этого псевдокласса. Например, CSS-правило `:focus {}` применится к любому элементу, который будет выделен с помощью навигации по клавише <kbd>Tab</kbd> с клавиатуры.

### `:active` ([основная статья](/posts/css/doka/active))

Применяется к интерактивным элементам в момент взаимодействия. Например, нажатая кнопка.

### `:is()`

Позволяет сгруппировть схожие селекторы вместо последовательного перечисления через запятую. При группировке большого количества селекторов это может существенно сократить, а главное — упростить написание:

вместо

```css
h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
  /* … */
}
```

с `:is()` это можно описать так

```css
:is(h1, h2, h3, h4, h5, h6) a {
  /* … */
}
```

### `:any-link` / `:link` ([основная статья](/posts/css/doka/link)) / `:visited` ([основная статья](/posts/css/doka/visited))

Применяется ко всем элементам, которые могут иметь атрибут `href` (`<a>`, `<area>` и `<link>`). `:link` характеризует ещё не посещённые страницы, `:visited` — наоборот, посещённые (в рамках одного домена).

### `:checked` ([основная статья](/posts/css/doka/checked))

Применяется к элементам, состояние которых меняется с помощью атрибута `checked`.

### `:default`

Применим к элементам формы (`<input type="radio">`, `<input type="checkbox">`, `<option>` и `<button>`), у которых можно задать начальное состояние.

Например, у `<input type="checkbox">` селектор применится к тому чекбоксу, у которого в разметке установлен атрибут `checked`, т. е. он **по умолчанию** выбран:

<p class="codepen" data-height="304" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="rNMGbZw" style="height: 304px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":default">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/rNMGbZw">
  :default</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:dir()`

Позволяет найти элементы по направлению текста в нём (например, в арабском направление письма идёт справа налево). К сожалению, пока свойство [поддерживается только в Firefox](https://caniuse.com/css-dir-pseudo).

### `:disabled` / `:enabled`

Позволяют находить элементы формы по состоянию их атрибута `disabled`. _Почти_ эквивалентны селекторам по атрибуту (`[disabled]` и `:not([disabled])` соответственно), но более гибкие, т. к. среагируют на унаследованное состояние `disabled`. Если есть `<fieldset disabled>`, то отключаются вложенные в него контролы форм.

<p class="codepen" data-height="350" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="bGwoPvx" style="height: 350px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":disabled / :enabled">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/bGwoPvx">
  :disabled / :enabled</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:empty` ([основная статья](/posts/css/doka/empty))

Применяется к элементам, у которых внутри нет других тегов или текста. Например, можно проверить, что у кнопки не задан текст или иконка, чтобы задать минимальные размеры:

<p class="codepen" data-height="557" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="zYKPqWm" style="height: 557px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":empty">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/zYKPqWm">
  :empty</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:first-child` / `:last-child` / `:nth-child()` / `:nth-last-child()` / `:only-child` ([основная статья](/posts/css/doka/child))

Селекторы элемента по его положению относительно родителя (первый, последний, n-й, единственный).

### `:first-of-type` / `:nth-of-type()` / `:last-of-type` / `:nth-last-of-type()` / `:only-of-type` ([основная статья](/posts/css/doka/nth-of-type))

Селектор по типу внутри одного родителя.

### `:fullscreen`

Признак того, что документ развернули на всё окно (с помощью JavaScript).

Cкроем панель управления у плеера, если он развёрнут на весь экран:

```css
.player:fullscreen .player__controls {
  display: none;
}
```

### `:focus` ([основная статья](/posts/css/doka/focus)) / `:focus-within`

Элемент, который сейчас находится в фокусе (с помощью клавиши <kbd>Tab</kbd>). А `:focus-within` ещё обозначает элемент, внутри которого находится элемент в фокусе.

### `:has()` ([основная статья](/posts/css/doka/has))

Позволяет уточнить селектор, передав в аргумент отношение к элементу, к которому применятся псевдокласс `:has()`. В январе 2021 года [нет поддержки ни в одном бразере](https://caniuse.com/css-has).

### `:hover` ([основная статья](/posts/css/doka/hover))

Элемент, на который сейчас навели курсор.

### `:indeterminate`

Элементы, которые могут находиться в «промежуточном» состоянии:

- `<input type="checkbox">`, отображающий, что не все пункты вложенной группы были выделены;
- группа `<input type="radio">` с одинаковым `name`, но у которой ни один элемент не установлен в `checked`;
- `<progress>`.

Для `<input>` состояние `indeterminate` в HTML можно задать только через JavaScript.

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

Селектор по языку содержимого текста. В HTML есть атрибут `lang`, который указывает на язык содержимого, этот псевдокласс позволяет обратиться к элементу по содержимому этого атрибута.

Например, в арабском языке нет переносов:

```css
:lang(ar) {
  hyphens: none;
}
```

### `:not()`

Находит элемент, которые **не соответсвует** селектору, который передан в качестве аргумента. Очень мощный псевдокласс, позволяющий писать эффективные CSS-селекторы.

Выделим красной рамкой все `<img>`, которым забыли прописать атрибут `alt`:

```css
img:not([alt]) {
  outline: 2px solid red;
}
```

### `:optional` / `:required` ([основная статья](/posts/css/doka/required)

`:optional` находит любой `<input>`, у которого не установлен атрибут `required` — то есть находит необязтельные поля ввода. А `:required` — наоборот, те `<input>`, у которых есть этот атрибут.

### `:read-only` / `:read-write`

Находит элементы, недоступные (`:read-only`) или наоборот (`:read-write`) для редактирования. Например, ориентируется на наличие атрибута `disabled` или `readonly`.

### `:root`([основная статья](/posts/css/doka/root)

Соответствует корневому тегу-элементу документа. Для HTML это, соответсвенно, `<html>`, для SVG — `<svg>`. Специфичность селектора `:root` выше, чем у селектора по тегу.

### `:target`

При переходе по ссылке, которая ведёт на URI-фрагмент (элемент внутри страницы), `id` фрагмента совпадает со значением атрибута `id` этого элемента — это состояние можно «поймать» с помощью псевдокласса `:target`:

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="Realetive" data-slug-hash="XWNWgBJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=":target">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/XWNWgBJ">
  :target</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `:valid` / `:invalid` ([основная статья](/posts/css/doka/invalid-valid)

Селектор `:valid` соответсвует `<input>` или `<form>`-элементу, контент которого валиден в соответствии с типом поля. Обратный эффект у `:invalid` — сработает при ошибке HTML-валидации.

## Подсказки

💡 Псевдоклассы не обязательно описываются вместе с элементом — если он не указан, селектор будет обозначать любой доступный элемент, который _может иметь_ этот псевдокласс (при активации нужного состояния).

💡 Если задать псевдокласс элементу-родителю, то можно стилизовть дочерний элемент при изменении состояния у родителя.

Если курсор находится внутри `<nav>`, увеличить размер шрифта у вложенных ссылок:

```css
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
