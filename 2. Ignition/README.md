# Namaste-React
 
## Chapter 2 Igniting our App

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
    - For example in gitignore we add node-modules because node-modules can be autogenrated at production server. We should not add parcel-cache or any packagejson file because those are needed at server to get the packages.

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
- 
    - 'broswerlists' is the option in package.json which is used to provide information which older version broswer should support out app.
