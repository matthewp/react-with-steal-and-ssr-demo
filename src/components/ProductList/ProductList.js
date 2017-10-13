import React, { Component } from 'react';
import ProductCard from './ProductCard/ProductCard';

class ProductList extends Component {
  render() {
    const { products = [], addToCart, removeFromCart, cart } = this.props;
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
