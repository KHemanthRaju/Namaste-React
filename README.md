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
  
 ## Chapter 2 Igniting our App
 
<details>

### Theory

- What is 'NPM'?

   - NPM is for package management. It is a tool to install required packages alongwith it's dependencies.

   - <b>For example:</b>
      - $ npm init <--This will initialize package repositories
      - $ npm install parcel <-- This will install parcel packages alongwith it's all dependencies
      
---

- What is 'Parcel/Webpack' ?. Why do we need it?

    - Parcel is a bundler which bundles our app files into running entity. 
    - Parcel alongwith React act as behind the scene tool which make our app run. It builds up the environment required to run the app.

 - FYI : create-react-app uses Webpack by default along with Babel.

---

- What is .parcel-cache

    - parcel-cache is some kind of space which keep tracks of set of recent changes so that whenever subsequent build happens it take reference from those recent change and does the latest change on top of that.
    - Basically it works on difference of the state of changes and due to this feature all subsequent build takes lesser time as compared to initial build because it does lesser work.

    - .parcel-cache get created as part of build process.

---

- what is 'npx'?

    - Here 'npx' means npm execute. It builds our app. For example 
    - $npx parcel index.html <-- This command executes parcel and provides index.html as entrypoint for our build app

---

- What is difference between 'dependencies' vs 'devDependencies'?

    - devDependencies is for local development environment and dependecies is for global environment.

---

- List down your favourite 5 superpower of Parcel and describe any 3 of them in your own words:

    - Minify <---Minifies our code. It just make it compact and remove uncessary long variable names, spaces
    - Image optimization <--- Images basically increase website loading time. Image optimization does optimization at image level and speed up the page loading
    - Compression 
    - File Watcher <---An algorithm which parcel uses to keep track of changes in any app files and react accordingly 
    - HMR( Hot module Replacement) <--HMR keep track of any module changes and reloads the page to make change effective
    - Port number <--Keep track of already used port number and allocate new unused port number
    - Code cleanup <--Uncessary console.log messages are removed through this process

---

- What is '.gitignore'? What we should add and do not add into it?

    - .gitignore is the place where we put our files that need not be sent to server. Usually we put those files here which can be autogenrated at production server
    - For example in gitignore we add node-modules because node-modules can be autogenrated at production server. We should not add package.json file because those are needed at server to get the packages.

---

- What is difference between package.json and package-lock.json?

    - package.json get generated during npm initialization and package-lock.json keeps information of exact package with version which currently under use in current environment

---

- Why should I not modify 'package-lock.json'?
- 
    - package-lock.json actually is large information center which keeps track of package and version and dependency information which is used to run app if that get modified then it will create conflict at server side and produce wrong results.

---

- What is 'node_modules'? is it good idea to push that on git?

    - 'node_modules' are the downloaded packages along with all dependecies packages which get generated during npm install. Any npm install comand downloads and put packages in node_modules alongwith all depedencies and dues this it becomes very big which should not go to git and that's why it should be placed in .gitignore

---

- What is the 'dist' folder?

    - 'dist' folder conatains set of files which is compact version of actualy code files. This get generated during npx command.

---

- What is 'browserlists'?
     
    - 'broswerlists' is the option in package.json which is used to provide information which older version broswer should support out app.

 ---
</details>

## Chapter 3 Laying the Foundation
<details>
## 1. Writing Scripts in package.json.
<hr>

### Q. What converts New Code to Older Code(For older version Browsers)? 

A: Babel , We do not need to write polyfill. Babel does it automatically.

<hr>

`npx` - executing commands without downloading packages
npm - will download required packages

> Note: Parcel will not remove console.log automatically. We need to configure for it. There is a package for it, named `babel-plugin-transform-remove-console` either from babel website or npmjs website: 
command : 
```
npm install babel-plugin-transform-remove-console --save-dev /-D
```

Usage: 

    1.via .babelrc (recommended) : 
    2. via CLI
    3. via NodeAPI

## 2. React-key Reconciliation :
When there are siblings in an array, we need to give keys for each sibling

>  **HW**: Read about React-key Reconciliation from React Docs.
## 3. Babel 

React.createElement gives us an Object, which is then converted to html and puts into DOM

Flow: 

```
React.createElement => Object => HTMl(DOM)
```
> **HW** : Difference between **HTML** and **JSX**
JSX uses React.createElement (behind the scenes), which gives Object, and then into HTML, and it is put into DOM
Babel does it. Babel converts JSX. JSX was developed by Facebook.

Flow: 
```
JSX => React.createElement => Object => HTMl(DOM)
```
Babel converts JSX into React.createElement

> NOTE: Babel is must to use JSX .

<hr>

### Q. Is JSX HTML inside JS?

A:  No,  JSX is a HTML like Syntax, and not HTML inside JS.

<hr>

Bable Compiler for JS.
Read Babel Docs at [babeljs.io](https://babeljs.io)
<br><br>
> **HW :** Play with Babel in it's website.
Also Go to it's GitHub Repo, and read about its algorithms.
Babel comes along with Parcel.


## 4. React Component types:

1. Functional Component- NEW
2. Class Based Component - OLD

### **Functional Component** is just a normal function that returns some piece of JSX, or a react element, or a function. 
Name of a Component starts with a Capital Letter (not mandatory, but good practice to use)
If we have to write multiple lines to be returned in a component, we need to use () and ; at the end.

> For Homework, use Normal Convention.

## 5. Diff b/n React Element & React Component:

React Element is returns an Object.
React Component is a function that returns JSX, or a react element, or a function.

Syntax When rendering:
- **For React Element:**

    We use `root.render(element_name);`


- **For React Component:**

     We use Angular brackets: `root.render(\<ComponentName />);`

 Any piece of Javascript code can be written within {} 

> XSS - Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it.
> JSX takes care of XSS.
<hr>

Q: Component Composition:

A: Writing/ Passing component inside component.

<hr>

>Home Work:
>Read about React-key Reconciliation from React Docs.
</details>
