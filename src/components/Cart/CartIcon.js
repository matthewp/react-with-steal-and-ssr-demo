import React, { Component } from 'react';
import { Glyphicon, Badge } from 'react-bootstrap';
import 'bootstrap.css';
import './Cart.less';

export class CartIcon extends Component {
  render() {
    const { count } = this.props;
    return (
      <button className="cart-icon">
        <Glyphicon glyph="shopping-cart" />
        <Badge>{count}</Badge>
      </button>
    );
  }
}

export default CartIcon;
