---
title: "<fieldset>"
name: fieldset
author: Roman_Ganin
co-authors:
designers:
contributors:
summary:
  - fieldset
  - <fieldset>
  - тэг
  - тег
  - форма
---

## Кратко

Тег `<fieldset>` группирует элементы формы (поля ввода `<input>` / `<textarea>`, выпадающие списки `<select>` и другие) в блок с характерным выделением границ. Опционально с помощью тега [`<legend>`](/html/doka/legend) внутри `<fieldset>` можно задать заголовок для создаваемой группы (он может быть только один и обязательно должен идти первым вложенным элементом).

## Пример

```html
<form>
  <fieldset>
    <legend>Прозвище Дракса из «Стражей Галактики»?</legend>
    <label>
      <input type="radio" name="answer" value="Exterminator">
      Уничтожитель
    </label>
    <label>
      <input type="radio" name="answer" value="Destroyer">
      Разрушитель
    </label>
    <label>
      <input type="radio" name="answer" value="Accuser">
      Обвинитель
    </label>
    <label>
      <input type="radio" name="answer" value="Sweet-tooth">
      Сладкоежка
    </label>
  </fieldset>
</form>
```

## Как это понять

В сложный формах количество контролов может устрашающе перегружать интерфейс и правильным решением в этом случае будет группировка смысловых элементов.

## Как пишется

```html
<fieldset>…</fieldset>
```

Для добавления подписи внутри `<fieldset>` следует использовать [`<legend>`](/html/doka/legend):

```html
<fieldset>
  <legend>Заголовок для группы</legend>
  …
</fieldset>
```

## Атрибуты

- `disabled` — блокирует все контролы __внутри__ тега (как будто каждому из них указали этот атрибут — очень удобно);
- `form` — связывает контролы __внутри__ тега с формой (будто они располагаются внутри) — для этого в значение атрибута следует указать `id` формы;
- также для `<fieldset>` доступны все [глобальные атрибуты](/html/doka/global-attrs).

## Подсказки

:::callout 💡
Самое удобное в использовании `<fieldset>` — возможность заблокировать __все__ вложенные контролы внутри тега одним атрибутом `disabled`:
:::

<p class="codepen" data-height="347" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="RwGNEmp" data-preview="true" style="height: 347px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="fieldset demo">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/RwGNEmp">
  fieldset demo</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

Внешний вид оформления рамки по умолчанию у `<legend>` немного отличается в зависимости от браузера и операционной системы:

<section class="section section_column_2">
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/win10_chrome_71.0.png" alt="Windows 10, Google Chrome 71.0">
    <figcaption>Windows 10, Google Chrome 71.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/macbsr_chrome_71.0.png" alt="MacOS Big Sur, Google Chrome 71.0">
    <figcaption>MacOS Big Sur, Google Chrome 71.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/win10_edge_18.0.png" alt="Windows 10, Edge 18.0">
    <figcaption>Windows 10, Edge 18.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/macbsr_safari_14.0.jpg" alt="MacOS Big Sur, Safari 14.0">
    <figcaption>MacOS Big Sur, Safari 14.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/win8_ie_10.0.png" alt="Windows 8, Internet Explorer 10.0">
    <figcaption>Windows 8, Internet Explorer 10.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/win7_ie_9.0.png" alt="Windows 7, Internet Explorer 9.0">
    <figcaption>Windows 7, Internet Explorer 9.0</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/6.0_Samsung-Galaxy-S7_portrait_real-mobile.png" alt="Samsung Galaxy S7">
    <figcaption>Samsung Galaxy S7</figcaption>
  </figure>
  <figure class="section__item">
    <img src="/assets/images/posts/fieldset/6.0_Google-Nexus-6_portrait_real-mobile.png" alt="Google Nexus 6">
    <figcaption>Google Nexus 6</figcaption>
  </figure>
</section>

## В работе

Чтобы убрать (или стилизовать рамку), используется «CSS-семейство свойств» border: [`border`](/css/doka/border), [`border-radius`](/css/doka/border-radius) и других:

<p class="codepen" data-height="573" data-theme-id="light" data-default-tab="result" data-user="Realetive" data-slug-hash="eYdmXwV" data-preview="true" style="height: 573px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="&amp;lt;legend&amp;gt;">
  <span>See the Pen <a href="https://codepen.io/Realetive/pen/eYdmXwV">
  &lt;legend&gt;</a> by Roman Ganin (<a href="https://codepen.io/Realetive">@Realetive</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
