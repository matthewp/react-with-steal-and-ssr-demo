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

**Using Models for stores**
- We're going to use observable **Models** for our "store", React components for our **View**, and use observable **ViewModels** for our views state and a reactive connection to the models

**CanJS Observables**
- In CanJS we have this concept of observables, values, objects and list that emit events, that you can subscribe to, when their properties change (Just like MobX or the something like the data objects in Vue.js)
- CanJS has a few but the 2 we are going to use today are `DefineMaps` which act as observable objects, and `DefineLists` which are like observable Arrays
- So let's set up the Models, we're going to have `Products` which are going to have a `id`, `name`, `image` and description(`desc`) properties
- Create a `product.js` file, in `src/models/`
- `npm install can-define`
- create a `Product` class by importing and extending `DefineMap`, give it `id`, `name`, `image` and `desc` properties, all of type `string`, and export it as default
- "But what we really want is a list of products, so we create a typed list like this"
- import and extend a `DefineList` and assign it to the `Product.List` property, mark all it's elements `"#"` as type `Product`
- "We have a library called can-connect, that let's you connect models to data-sources... and by convention we give `Product` a static `getList` method that returns a ProductList of Products
- Implement `Product.getList({})`
- "...Now one cool thing you can do do aid development is give DefineMaps and Lists a name, passed as the first argument" - name both classes
- "Okay, so now we want a `Cart` Model, and really, when you think about it, a `Cart` is just a list of products..."
- Create a file name `Cart.js` in `src/models/`
- import and extend `Product.List` for a `Cart` model.
- implement a static `getCart()` singleton method, and explain this should probably be something else, but this is just for a demo, so we'll just have it return a singleton instance of `Cart`
- implement the `total` computed property (times by a hundred to remove JS Floating-Point problems)
- implement a `has(product)` method (to be used in the ProductList later)


**ViewModels**
- We're going to take this app and convert it to use react-view-model
- In the `ProductList` component, switch the React `Component` import for a `react-view-model` import





