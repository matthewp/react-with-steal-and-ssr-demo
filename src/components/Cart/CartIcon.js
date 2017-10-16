import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import Cart from '~/src/models/cart';
import { Glyphicon, Badge } from 'react-bootstrap';
import 'bootstrap.css';
import './Cart.less';

const ViewModel = DefineMap.extend({
  cart: {
    Type: Cart,
    value: Cart.getCart()
  },
  count: {
    get() {
      return this.cart.length;
    }
  }
});

export class CartIcon extends Component {
  static ViewModel = ViewModel;

  render() {
    const { count } = this.viewModel;

    return (
      <button className="cart-icon">
        <Glyphicon glyph="shopping-cart" />
        <Badge>{count}</Badge>
      </button>
    );
  }
}

export default CartIcon;
