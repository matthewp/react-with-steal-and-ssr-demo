# react-with-steal-and-ssr-demo
A demo of a "Cart &amp; Checkout" done with React-View-Model, CanJS and StealJS

_For each stage below switch to the corresponding branch to start (for Stage 1 switch to `stage-1` branch).

## Stage 1

**Steal is the easiest way to start making a react app**

- starts with empty `index.html` and `index.js`
- `npm install steal steal-tools react react-dom serve` (serve for serving static)
- add `script.start` to `package.json` and jsut make value `serve`
- run `npm start` and just point browser to blank HTML page
- create `script` tag in index.html and set `src` to `/node_modules/steal/steal.js`
- set `main` attribute on `script` tag to `index` meaning module name for `index.js`
- add basic **Hello world** react app to `index.js`
- add `<div id="app"></div>` to index.html to contain react hello world
- show Hello world in browser
- Talk about how JSX is just built in because Steal uses babel to transpile
- Marvel at the simplicity, comment about no build step or Create-React-App
- show how easy it is to demo with **just an HTML page** by setting `main` to `@empty` and moving the Hello World inside the script tag
- after showing that, talk about how for future goodness main should include the project name from package.json and put it back

## Stage 2

**A Basic React Cart & Checkout**

- show a basic react app (`stage-2` branch), it uses `setState()` and some preset data, along with 2 components
- you can see here in `App.js` that we are importing some `less` styles, steal can do that, and import pretty much most things, it just needs the `steal-less` plugin to be installed and configured in the `package.json` under the `steal` property. You can see some other configuration there too.
- mention that we've imported bootstrap and react bootstrap here jsut to make it look a little nicer

**Modlets**

- _A BREIF ASIDE_ about **Modlets**
- show the `ProductList` components directory (zoom in if you can)
- We believe in a design pattern called modlets, co-locating all the files a component needs to be modular
    - Has a source file, any styles, documentation, test and test files and a demo page
    - Can be nested (as seen here with the `ProductCard`)
- talk about the benefits TDD has when it comes to the “design of your code”, you encapsulate better, you think in terms of a consumer first api, you build a piece at a time instead of all at once… Modlets have that same kind of effect and more
  -Encourages best practices
        - Easy to catch missing tests or docs in a Code Review
    - Encourages good maintenance practices
        - Developers are more likely to update tests and documentation if they are sitting right next to the module they are editing, not hidden away in a test or docs folder
    - Aids in debugging
        - Is the problem in the demo page? No: look up, yes: look down
    - Streamlines development
        - You don’t have to load the whole app, or click around to get in the right state just to work on this small ui peice
- Steal makes Modlets easy, if you want to talk more about Modlets, come talk to me after the presentation

**Switching to ViewModels**

- We're going to take this app and convert it to use react-view-model
- We're going to use observable **Models** for our "store", React components for our **View**, and use observable **ViewModels** for our views state and a reactive connection to the models

**CanJS Observables**
- In CanJS we have this concept of observables, values, objects and list that emit events, that you can subscribe to, when their properties change (Just like MobX or the something like the data objects in Vue.js)
- CanJS has a few but the 2 we are going to use today are `DefineMaps` which act as observable objects, and `DefineLists` which are like observable Arrays
- In the `ProductList` component, switch the React `Component` import for a `react-view-model` import




