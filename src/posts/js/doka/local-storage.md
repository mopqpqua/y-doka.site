---
title: "localStorage"
name: local-storage
author: akellbl4
summary:
  - localstorage
  - webstorage
  - storage
---

## Кратко

Это объект, хранящийся в `window`, который позволяет долговременно сохранять данные в браузере. Работает как хранилище данных в формате ключ-значение — при сохранении данных мы указываем имя поля, в которое должны быть сохранены данные, и затем используем это имя для их получения.

- Значения хранятся в виде строк. При попытке сохранения других типов данных, они будут приведены к строке. Например, если записать число, то при чтении нам вернется число, записанное в строку
- Не имеет ограничений по времени хранения, может быть очищен пользователем вручную или браузером при переполнении автоматически (браузеры основанные на WebKit, например Safari, очищают Local Storage если к нему не обрашались в течении 7 дней).
- Максимальный объем данных ограничен размером 5MB.

## Пример

Записываем данные:

```js
window.localStorage.setItem("name", "Doka Dog")
```

При чтении ранее записанных данных по ключу `name` мы получим `Doka Dog`.

```js
const name = window.localStorage.getItem("name")
console.log(name)
```

Повторная запись по тому же ключу приведет к замене данных:

```js
window.localStorage.setItem("name", "Dog Doka")
const name = window.localStorage.getItem("name")
console.log(name)
```

## Как это понять

Если нам нужно сохранить данные в браузере на долгое время и объем этих данных достаточно большой, то Local Storage — то, что нам нужно. Данные будут храниться бессрочно и могут быть стерты только в двух случаях: при превышении лимита по размеру данных или очистке хранилища пользователем или программно.

## Как пишется

### Запись

Для записи используйте метод `setItem("ключ", "значение")`, который принимает два строковых параметра: ключ, по которому будет сохранено значение, и само значение.

```js
window.localStorage.setItem("name", "Doka Dog")
```

### Чтение

За чтение отвечает `getItem("ключ")` c одним параметром, который указывает на ключ для чтения и возвращает полученное значение из хранилища. Если по этому ключу нет значения, то метод вернет `null`.

```js
window.localStorage.getItem("name") // вернет "Doka Dog"
window.localStorage.getItem("user") // вернет `null`
```

### Удаление

Удаляет запись из хранилища `removeItem("ключ")`. Он успешно выполнится даже если указанного ключа не существует в хранилище.

```js
window.localStorage.removeItem("name")
window.localStorage.removeItem("user")
```

### Очистка хранилища

Метод `clear()` очищает хранилище полностью

```js
window.localStorage.clear()
```

### Количество полей в хранилище

Используя поле `.length` можно узнать, сколько всего полей было записано в хранилище.

```js
window.localStorage.length
```

### Получение ключа по индексу

Метод `key()` получает ключ по индексу. Значения в хранилище хранятся в порядке их добавления, поэтому значение добавленное первым будет храниться в позиции `0` и так далее.

```js
window.localStorage.setItem("name", "Doka Dog")
widow.localStorage.key(0) // вернет "name"
```

Таким образом, используя количество ключей в хранилище и получение ключа по индексу, можно организовать перебор всех значений в хранилище.

```js
const localStorageSize = window.localStorage.length
for (let = 0; i < localStorageSize; i++) {
  console.log(window.localStorage.getItem(localStorage.key(i)))
}

```

### События

При установке значения в хранилище срабатывает глобальное событие `storage`, с помощью которого можно отслеживать изменения в хранилище.

💡 Событие происходит только на других открытых страницах текущего сайта.

Событие содержит поля:

- `key` - ключ, который был изменен (при вызове метода `clear()`, ключ будет `null`);
- `oldValue` - старое значение, записанное в поле;
- `newValue` - новое значение, записанное в поле;
- `url` - адрес страницы, на которой вызвано изменение.

```js
window.addEventListener("storage", function (evt) {
  console.log(evt)
})
```

## В работе

{% include "authors/akellbl4/in-work.njk" %}

🛠 Можем сохранять данные для пользователя без сохранения на сервере. В следующем примере мы будем запоминать размер шрифта на сайте и восстанавливать размер из хранилища, если он был изменен до этого.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="js,result" data-user="akellbl4" data-slug-hash="VwPQqwJ" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Local Storage Example">
  <span>See the Pen <a href="https://codepen.io/akellbl4/pen/VwPQqwJ">
  Local Storage Example</a> by Pavel Mineev (<a href="https://codepen.io/akellbl4">@akellbl4</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

🛠 Можно использовать для синхронизации нескольких открытых в браузере вкладок. При изменении рамера шрифта в одной вкладке мы узнаем об этом во всех остальных и тоже изменим размер.

```js
function changePageFontSize(size) {
  document.style.fontSize = `${size}px`
}

window.addEventListener("storage", function (evt) {
  if (evt.key === "pageFontSize") {
    changePageFontSize(evt.newValue)
  }
})
```

🛠 Иногда нам нужно сохранить не просто текст, а целую структуру данных, и в этом нам поможет `JSON.stringify`.

```js
const user = {
  name: "Doka Dog",
  avatarUrl: "mascot-doka.svg"
}

localStorage.setItem("user", JSON.stringify(user))
```

И после чтения парсим:

```js
function readUser() {
  const userJSON = localStorage.getItem("user")

  if (userJSON === null) {
    return undefined
  }

  // Если вдруг в хранилище оказался не валидный JSON предохраняемся от этого
  try {
    return JSON.parse(userJSON)
  } catch (e) {
    localStorage.removeItem("user")
    return undefined
  }
}
```

🛠 Если ваш сайт использует скрипты аналитики или другие внешние библиотеки, то они так же имеют доступ к хранилищу. Поэтому лучше именовать ключи для записи в хранилище с префиксом и в едином стиле. Например если мы записываем что-то на этом сайте я бы выбрал префикс `YD_{название ключа}`, так можно сгрупировать только те значения что нам нужны или применить фильтр в инструментах разработчика.

🛠 Используйте функции обертки для предотвращения ошибок связанных с неудачными попытками записи, отсутствия Local Storage в браузере и дублирования кода.

```js
function getItem(key, value) {
  try {
    return window.localStorage.getItem(key)
  } catch (e) {
    console.log(e)
  }
}

function setItem(key, value) {
  try {
    return window.localStorage.getItem(key, value)
  } catch (e) {
    console.log(e)
  }
}

function setJSON(key, value) {
  try {
    const json = JSON.stringify(value)

    setItem(key, json)
  } catch (e) {
    console.error(e)
  }
}

function getJSON(key) {
  try {
    const json = getItem(key)

    return JSON.parse(json)
  } catch (e) {
    console.error(e)
  }
}
```

{% include "authors/akellbl4/author.njk" %}
