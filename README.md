# 🌼 Daisy Love Checker Web Component
![Daisy Love Checker Demo](daisy-picker.png)
A playful Web Component that mimics the traditional petal-picking game — "Loves me, loves me not" — using a dynamic digital daisy. Click the button to pluck petals one by one until you get your final answer.

---

## 🎯 Features

- 🌸 Random number of petals (between **4 and 15**, even or odd).
- 💬 Alternates between “Loves me” and “Does not love me” on each click.
- 🎞️ Smooth falling animation for petals.
- 🔁 “Restart” button appears when the game ends.
- ♻️ Fully encapsulated using Shadow DOM.

## Content
The project includes the following files:
* index.html – Usage example of the component.
* daisy-love-checker.js – The custom element logic and style.

## 📦 Installation

1. Clone or download this repository:

```bash
git clone https://github.com/Mihalescu-Valentina/framework_design/
````

2. Add the component to your HTML file:

```html
<script src="daisy-love-checker.js"></script>
```

3. Use the custom element in your HTML body:

```html
<daisy-love-checker></daisy-love-checker>
```

---

## 🧪 Example Usage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Daisy Love Checker</title>
  <style>
    body {
      background: #fdf6e3;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
  </style>
</head>
<body>

<daisy-love-checker></daisy-love-checker>

<script src="daisy-love-checker.js"></script>
</body>
</html>
```

---

## 🔧 Technical Details

* Built using [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).
* Uses Shadow DOM for style encapsulation.
* Petals are rotated around a circular center using CSS transforms.
* Final message shown once all petals are plucked.
* Restart button resets the game state and flower appearance.

---

## 📚 Inspiration

Based on a classic Romanian game of love prediction where flower petals are used to answer questions of the heart. This component brings a fun cultural tradition to the web!

---

## 🛠️ Future Enhancements

* Add sound effects for petal plucks.
* Support for mobile gestures (tap/drag petals).
* Custom petal count via attribute (`<daisy-love-checker petals="12">`).
* Localization (different languages for the phrases).
* User-defined phrases (e.g. “Will marry me / Won’t marry me”).

---

