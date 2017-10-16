import React from 'react';
import Component from 'react-view-model/component';
import DefineMap from 'can-define/map/map';
import Cart from '~/src/models/cart';
import Product from '~/src/models/product';
import ProductCard from './ProductCard/ProductCard';

export const ViewModel = DefineMap.extend({
  products: {
    Type: Product.List,
    get(lastSetValue, setValue) {
      Product.getList().then(setValue);
    }
  },
  cart: {
    Type: Cart,
    value: Cart.getCart()
  },
  addToCart(product) {
    if (this.cart.indexOf(product) === -1) {
      this.cart.push(product);
    }
  },
  removeFromCart(product) {
    const productIndex = this.cart.indexOf(product);
    if (productIndex !== -1) {
      this.cart.splice(productIndex, 1);
    }
  }
});

const noop = () => {};

class ProductList extends Component {
  static ViewModel = ViewModel;

  render() {
    const {
      products = [],
      cart = [],
      addToCart = noop,
      removeFromCart = noop
    } = this.viewModel;

    return (
      <div key="products" className="list-of-products">
        {products.map(product => (
          <ProductCard
            key={product.id}
            {...product}
            inCart={cart.indexOf(product) !== -1}
            onRemove={() => removeFromCart(product)}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
