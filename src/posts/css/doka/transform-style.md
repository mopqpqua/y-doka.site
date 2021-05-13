---
title: "transform-style"
name: transform-style
author: ezhkov_d
summary:
  - трансформация
  - preserve-3d
---

## Кратко

Свойство `transform-style` определяет, как будут вести себя потомки элемента в 3D-пространстве при трансформации.

## Пример

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  transform-style: preserve-3d;
}

.child {
  transform: rotateY(-30deg);
}
```

## Как это понять

Допустим, есть родительский элемент, у которого есть потомки. Если задать родительскому элементу свойство `transform-style` со значением `preserve-3d`, то это позволит применять к дочерним элементам нормальные 3D-трансформации. При нормальных 3D-трансформациях дочерний элемент сможет, допустим, при повороте пересечь родительский элемент. Если задать значение `flat`, то дочерние элементы всегда будут лежать в плоскости родителя и не смогут пересечь его ни при каких поворотах, масштабировании и прочих условиях.

Получается, что при `transform-style: preserve-3d` каждый дочерний элемент получает независимую от родителя плоскость, к которой можно применять 3D-трансформации. При `transform-style: flat` существует ровно одна плоскость — плоскость родителя, и никакие трансформации не могут заставить дочерний элемент выйти из этой плоскости.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="wvordQN" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="transform-style">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/wvordQN">
  transform-style</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Как пишется

```css
.parent {
  transform-style: flat; /* По умолчанию */
  transform-style: preserve-3d;
}
```

Глобальные значения:

```css
.parent {
  transform-style: inherit;
  transform-style: initial;
  transform-style: unset;
}
```

## Подсказки

💡 Свойство `transform-style` не наследуется. Нужно индивидуально задавать его для каждого следующего уровня вложенности.

## В работе

🛠 Если нам нужно просто повернуть какой-то элемент в 3D-пространстве, то можно оставить `transform-style: flat` (либо вообще не задавать это свойство). Элемент всё равно будет поворачиваться, к нему будет применяться перспектива, всё будет выглядеть красиво. `transform-style: preserve-3d` нужно задавать, когда мы хотим применять 3D-трансформации и к родителю, и к потомкам, и при этом учитывать их визуальное взаимодействие. Классическим примером такой ситуации является куб, собранный из шести элементов-сторон.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="ezhkov" data-slug-hash="vYyeZmv" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="transform-style2">
  <span>See the Pen <a href="https://codepen.io/ezhkov/pen/vYyeZmv">
  transform-style2</a> by Denis Ezhkov (<a href="https://codepen.io/ezhkov">@ezhkov</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

{% include "authors/ezhkov_d/author.njk" %}
