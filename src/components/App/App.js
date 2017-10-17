import React, { Component } from 'react';
import ProductList from '../ProductList/ProductList';
import CartIcon from '../Cart/CartIcon';
import CartList from '../Cart/CartList';
import './App.less';

export default class App extends Component {
  constructor() {
    super();
    this.state = { showCartList: false };
  }

  toggleShowCartList = () => {
    this.setState(state => ({ showCartList: !state.showCartList }));
  };

  render() {
    return (
      <div>
        <header>
          <h1>Dog Stuff</h1>
          <CartIcon onClick={this.toggleShowCartList} />
        </header>
        <main>
          <ProductList />
          {this.state.showCartList ? <CartList /> : null}
        </main>
      </div>
    );
  }
}
