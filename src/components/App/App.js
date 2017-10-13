import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import CartIcon from '../Cart/CartIcon';
import { products } from '~/src/models/fixtures/products';
import './App.less';

export default class App extends Component {
  constructor() {
    super();
    this.state = { products, cart: [] };
  }

  addToCart = product => {
    this.setState(state => ({ cart: [...state.cart, product] }));
  };

  removeFromCart = product => {
    const idx = this.state.cart.indexOf(product);
    if (idx !== -1) {
      this.setState(state => ({
        cart: [...state.cart.slice(0, idx), ...state.cart.slice(idx + 1)]
      }));
    }
  };

  render() {
    const { products, cart } = this.state;
    return (
      <div>
        <header>
          <h1>Dog Stuff</h1>
          <CartIcon count={cart.length} />
        </header>
        <main>
          <ProductList
            products={products}
            cart={cart}
            addToCart={this.addToCart}
            removeFromCart={this.removeFromCart}
          />
        </main>
      </div>
    );
  }
}
