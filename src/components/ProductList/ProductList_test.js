import QUnit from 'steal-qunit';
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { Simulate } from 'react-dom/test-utils';
import ProductList from './ProductList';
import ProductCard from './ProductCard/ProductCard';

import { products } from '~/src/models/fixtures/products';

// ProductList unit tests
QUnit.module('Component: ProductList');

QUnit.test('renders a list', assert => {
  const testRenderer = ReactTestRenderer.create(
    <ProductList products={products} cart={[]} />
  );
  const productCards = testRenderer.root.findAllByType(ProductCard);
  assert.equal(
    productCards.length,
    products.length,
    'renders a ProductCard for each product'
  );
});

QUnit.skip('Adds a product to the cart', assert => {
  const cart = [];
  const addToCart = product => cart.push(product);
  const testRenderer = ReactTestRenderer.create(
    <ProductList products={products} cart={cart} addToCart={addToCart} />
  );
  const productCards = testRenderer.root.findAllByType(ProductCard);
  const button = productCards[0].findByType('button');
  console.log('button', button.instance);
  Simulate.click(button);
  assert.equal(cart.length, 1, 'clicking actually adds a product to the cart');
});
