# react-with-steal-and-ssr-demo
A demo of a "Cart &amp; Checkout" done with React-View-Model, CanJS and StealJS

_For each stage below switch to the corresponding branch to start (for Stage 1 switch to `stage-1` branch)._

## Stage 1

**Steal is the easiest way to start making a react app**

- starts with empty `index.html` and `index.js`
- `npm install steal steal-tools react react-dom serve` (serve for serving static)
- add `script.start` to `package.json` and just make value `serve`
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



## Stage 3

**ViewModels**
- "So now we've got some models, and we're using React for our views, so now we're going to take this app and convert it to use react-view-model to add CanJS View-Models to our React components..."
- show `App.js` and how the root app handles the `products` and the `cart` in it's state, and passes in `addToCart` and `removeFromCart`
- We want the `ProductList` component to be more self contained, it should get it's own for it's products (from the `Product` model), and the cart, so that it works on it's own, and will work on its modlet demo page
- delete the code in `App.js` that passes all the props to `ProductList`, as well as the App component methods and the initial state in the constructor (the whole constructor method), also change `cart.length` to `0` in the `CartIcon` props

**Add a ViewModel to ProductList component**
- `npm install react-view-model`
- In the `ProductList` component, switch the React `Component` import for a `react-view-model` import (use `react-view-model/component`)
- import and extend `DefineMap` to create a `ViewModel` class, which can be exported
  and assign a `static` class property `ViewModel` equal to `ViewModel`
- checkout the ProductList demo page for the rest of this development
- import `Product` and `Cart` from `~/src/models/` and talk about steals `~` feature
- in `ViewModel` create a `products` property, make it a computed property that uses the asyncSetValue argument getters get. Set the `Type` to prodcuct list, and say this is nessecary for React-View-Model to work fully. Fetch products with `getList()` and async-ly assign with `setValue` argument. Explain how this combined with the default value get us what we want
- if there is time, briefly touch on the `Promise Helper` included with React-View-Model that could give you pending and error props
- implement the `cart` property on the `ViewModel` using the `Type: Cart` definition and the `getCart()` singleton method with the `value` definition (explain again, it's just for the demo and cart would propably be more complicated than this)
- "Now because `this.cart` is just an observable array it's trivial to implement `addToCard` and `removeFromCart` methods on the ViewModel
- in the `render()` method change `this.props` to `this.viewModel` and checkout the demo page HTML, you can remove all the boilerplate here, and just render the `ProductList` component now, because it's resonsible for it's own stuff, and it's own data store. If this demo page were to make requests, you could use `can-fixture` to mock the request-responses and keep this isolated here.

- **If there is time:** convert the `Product` model to use ajax and the current fixtures to be a fixture-store and add `can-fixture` to the demo page and main app.

**Add a ViewModel to ProductList component**
- Now you can go back to the main app, and of course, the `App` component is much simpler, but of course, the `CartIcon` count is hard coded to `0`
- since the `CartIcon` component is conceptually connected to the state of the `Cart` we'll give it a viewmodel too and connect it to our cart model.
- import and extend `DefineMap` to create a `ViewModel` class, which can be exported
  and assign a `static` class property `ViewModel` equal to `ViewModel`
- import the `Cart` model, and implement the `cart` property on the `ViewModel` using the `Type: Cart` definition and the `getCart()` singleton method
- in the `render()` method change `this.props` to `this.viewModel`
- now when you look back at the App page, you'll see the `CartIcon` still says `0`
- talk about how props get passed actually into the `viewModel`, so there's no error here, because the `viewModel` actually has a zero value (change it to 12 to show)
- talk about how you can access it on the viewModel, and show how implementing a getter, using the `lastSetValue` arg, can give you access to it, even if you want to override it for your components
- then fix it up to just use `this.cart.length`, remove the prop assignment from`App.js` and show it working as expected.
- comment on how simple the `App` component is now, and how the other components can now be worked on independantly because they are truly componentized
- note how you don't need a spectial `<Provider />` component to provide Reacts **"context"** object to the components, that they connect to their state through `Models`, and their viewModel holds the view's state and does any conversions nessecary from Model to View.

## Stage 4 (Skip for Time)

**Implement the CartList view with React View Model**
- If we wanted to keep some state in React, but still keep interoperability with React-View-Model
- "So we've got this premade `CartList` component..."
- Pull in the `CartList` component (and `Cart.html` demo page), put it in `src/components/Cart`
- show the coponent and the demo page, that produces random cart items
- modify it to use React-View-Model and DefineMap
    - import `react-view-model`, `can-define/map/map` and the `~/src/model/cart` and create a `ViewModel` like before that has a `cart` property with a value `Cart.getCart()` (don't forget `Type:Cart`)
- check out the demo, see that the Total is now working, and talk about how CanJS observables with a `Type` definition perform automatic conversion
- "But now, what if we only want to show the carlist when someone click on the CartIcon..."
- add an onClick prop callback to CartIcon (show demo)
- "Now, this doesn't belong in the viewModels, this should be in the `App` components view model really, but just to show that you don't have to make everything with RVM..."
- hook up the `App` state to toggle the `CartList` component based on that state
- show how it all works together great still, emphasize that because the Cart model is the single source of truth, eveything just React-ivly updates

## Stage 5

**Bundling for production**
- "now you are probably frustrated with how long lading is taking after refresh, and that's because it is individually requesting each script for all your node_modules and source files over ajax. This is actually something we're currently working on for development, but you need faster builds for production..."
- explain steal-tools bundling
- show temporary workaround needed for class properties, explain configuring babel with steal
- setup `npm build` to use envify and PRODUCTION env-var
- add `"build": "NODE_ENV=production steal-tools build --envify"` to package.json `build`
- add a `production.html` for demo
- copy the contents of `index.html` into `production.html` and change the `src` path to `/node_modules/steal/steal.production.js` (add `.production`)
- navigate to `production.html`, show the speed difference, and the network tab


## Stage 6

**Server-Side Rendering done right**

- "Time is Money: we’ve all seen the reports where for E-Commerce sites milliseconds can be worth millions" (site)
- "SSR is important for performance, especially on mobile and in areas with slow connections"
- "current React SSR solutions expect you to change how you build your SPAs, you need to gather all your initial state first then render your app component tree, and send that to the client as a string, but that’s not how we traditionally build SPAs"
- when we architect apps the CanJS way, each of our components fetch their own data ,mostly asynchronously, how can we get server side rendering to work with this crazy set up
- Describe how our Done-SSR works with zones to trap async events, actually server side render, and stream the resulting HTML to the server along with any pushes
    - We run the rendering for each request in its own context
    - We track any fetches, XHRs, or setTimeouts or any async events and wait until they’ve settled or timeout
    - Using HTTP/2 we push response streams immediately, removing the latency time (and there’s a fallback for HTTP/1 too!)
    - When everything settled we push the HTML to the client
- **Highlight**: You don’t need to change your code for SSR, it just works

- DO WHATEVER NEEDS TO BE DONE TO GET SSR WORKING

## Stage 7

**Incremental SSR**
- "But, when every millisecond counts, and you need that little ewxtra boost, to show your users something a little bit faster... introducing our experimental super boost: Incrememntal SSR"
- "Now with the normal SSR, you have to wait for all of your data requests to either resolve or timeout, but what if your query took a long time, or certain items in the page just took a lot longer to get the data for than others, you want your users to see something as fast as possible... so we got this crazy idea"

- "To help explain the point, let's slow down the API server artificially, so we might actually see the difference"
- Slow down server API artificially with a `setTimeout`

- Explain the technique
    - Show how it pushes the “initial state” html before requests are made, along with the mutation code
    - As results come in, push mutation instructions in the stream
    - talk about how the requests for the js, css and other resources are all pushed with H/2 push, so the client starts as soon as possible, but so are any API requests
    - so the request starts on the server, but then just get's passed up as a stream to the client
    - Talk about how when the client catches up, it just takes over, it's the same response stream, so when it catches up, it just takes over
    - this technique is specifically for squeezing those extra milliseconds of load time out before the page’s JavaScript takes over (could be worth millions if you are at a large enough scale)
- "Now what code do we need to change to get this done"
- Nothing on the client (WIN!)

- DO WHATEVER NEEDS TO BE DONE TO GET SSR WORKING





