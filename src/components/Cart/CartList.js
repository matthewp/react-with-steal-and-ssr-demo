import React from 'react';
import Component from 'react-view-model/component';
import Cart from '../../models/cart';
import DefineMap from 'can-define/map/map';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap.css';
import './Cart.less';

export const ViewModel = DefineMap.extend({
  cart: {
    Type: Cart,
    value: Cart.getCart()
  }
});

class CartList extends Component {
  static ViewModel = ViewModel;

  render() {
    const { cart = [] } = this.viewModel;
    return (
      <div className="cart-list">
        <Table>
          <thead>
            <tr>
              <th>Cart</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cart.length ? (
              cart.map(({ id, name, price }) => (
                <tr key={id}>
                  <td key="name">{name}</td>
                  <td key="price" className="text-right">
                    ${price}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2}>Empty</td>
              </tr>
            )}
            {cart.length > 0 && (
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td className="text-right">${cart.total}</td>
              </tr>
            )}
          </tbody>
        </Table>

        {cart.length > 0 && (
          <Button bsSize="xsmall" block>
            Proceed to Checkout
          </Button>
        )}
      </div>
    );
  }
}

export default CartList;
