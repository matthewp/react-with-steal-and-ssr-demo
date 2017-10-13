import React, { Component } from 'react';
import ProductCard from './ProductCard/ProductCard';

const noop = () => {};

class ProductList extends Component {
  render() {
    const {
      products = [],
      cart = [],
      addToCart = noop,
      removeFromCart = noop
    } = this.props;
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
