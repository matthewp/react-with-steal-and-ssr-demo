import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import CartIcon from '../Cart/CartIcon';
import './App.less';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Dog Stuff</h1>
          <CartIcon count={0} />
        </header>
        <main>
          <ProductList />
        </main>
      </div>
    );
  }
}
