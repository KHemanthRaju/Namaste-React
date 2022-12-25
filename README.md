# Namaste-React
 
## Chapter 1 Inception

<details>

### Theory

- What is Emmet?

  - Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. 
  - By using Emmet, developers type less, they save both on keystrokes and time.
  - For example, if you type `doc` in VS Code this will generate an entire HTML boiler Plot for you. This is similar to the snippet.
  - You can explore more on Emmet with this link : [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

  ***

- Difference between a Library and a Framework?
  - The main distinction between a framework and a library is that a framework inverts program control. It informs the developer of what they require. A library, however, does not. Instead, a programmer calls the library when and where he needs it.
  - When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.
  - ReactJS is a Library and AngularJS is a Framework.

---

- What is CDN? Why do we use it?
  - `CDN` Content Delivery Network.
  - A CDN is a network of servers that distributes content from an “origin” server throughout the world by caching content close to where each end user is accessing the internet via a web-enabled device. The content they request is first stored on the origin server and is then replicated and stored elsewhere as needed.
  - Why do we use it?
    - This is used to reduce the latency of content delivery and it improves the performance of the website.

---

- Why is React known as React?
  - React was developed for applications (Facebook) that have constantly changing data. Since React is a front-end framework or the “View” in MVC, this means that as the user clicks around and changes the app's data, the view should “react” or change with those user events.

---

- What is cross-origin in the script tag?
  - The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

---

- What is the difference between React and ReactDOM
  - `React` is used to `create view` and `ReactDOM` is responsible for actually `rendering UI` in the browser.

---

- What is difference between react.development.js and react.production.js files via CDN?

  - The development build is used - as the name suggests - for development reasons.
  - The production build, on the other hand, runs in production mode which means this is the code running on your client's machine.

---

- What are async and defer?

  - In practice, defer is used for scripts that need the whole DOM, and/or their relative execution order is important.
  - And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.

---

JS DOM Fundamentals

<details>

How to create an element?

- We create any element for example `h1` with the help of `document.createElement("h1")`.We create any element for example paragraph with the help of `document.createElement("p")`.

How to add text to created element?

- With the help of `variable_name.innerHTML("Hello")`

Where to store this created element?

- For this we must have the `id` of the `div`, this can be done with the help of `document.getElementById("id_name")`

How to push the element inside the id?

- This can be done with the help of `append child (variable_to_be_pushed)`, `appendChild` will push the created element to the div.

</details>

## Coding

- **Set up**

  - **VS Code**
  - **Chrome**
  - **Extensions** for and VS Code
    - `dzhavat.bracket-pair-toggler`
    - `rodrigovallades.es7-react-js-snippets`
    - `dbaeumer.vscode-eslint`
    - `esbenp.prettier-vscode`
    - `eamodio.gitlens`
    - `yandeu.five-server`

- Build your first `Hello World` program using
  - Just HMTL
  - Using **JS** to manipulate the **DOM**
  - Using **React**
    - use CDN Links
    - Create an Element
    - Create nested React Elements
    - Use root.render

Build your first `Hello World` program using Just `HTML`

<details>

We can Simply add an h1 tag to create our first Hello World Program.

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
      <!-- Simply use h1 tag -->
    <h1>Hello World</h1>
  </body>
</html>
```

[Code 🔗](1.Inception/index.html)

</details>

---

Build your first `Hello World` program using`JS` to manipulate the `DOM`

<details>

Easy-to-understand code with comments

```HTML
<body>
    <!-- JS is written inside script tag 👍 -->
  <script>
      const heading = document.createElement(""); //creating h1 tag!
    heading.innerHTML = "Hello World"; // adding content to the h1 tag!
    //now we need to push this heading into the div
    const value = document.getElementById("root");
    value.appendChild(heading); //pushing heading into the div with the help of appendChild
  </script>
</body>
```

[Code 🔗](1.Inception/indexWithJs.html)

</details>

---

Build your first `Hello World` program using `React`

<details>

```html
<body>
  <div id="root">Not Rendered</div>

  <script
    crossorigin
    src="https://unpkg.com/react@18/umd/react.development.js"
  ></script>
  <script
    crossorigin
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  ></script>

  <script>
    const heading = React.createElement("h1", {}, "Hello Wolrd"); //this will override everything inside the root!, means anything written will get overwritten
    //React element is an Object 💯
    const root = ReactDOM.createRoot(document.getElementById("root")); //whatever you passing becomes the root
    //passing react element inside the root
    root.render(heading); //just like appednChild()in JS!
  </script>
</body>
```

[Code 🔗](1.Inception/indexWithReact.html)

</details>

  </details>
