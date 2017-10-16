import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap.css';
import './Cart.less';

class CartList extends Component {
  render() {
    const { cart = [] } = this.props;
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
