# ProductList
@parent ProductList
@module {Component} app/components/ProductList <ProductList />

Display a list of `ProductCards` for each of the `products`, with controls to
 add or remove products from a `cart` Array

@signature `<ProductList />`
type Props = {
  products: Array,
  cart: Array,
  addToCart?: (product:Product) => void,
  removeFromCart?: (product:Product) => void
  };

@body

## Use

```
<ProductList
  products={ [] }
  cart={ [] }
  addToCart={ handleAddToCart }
  removeFromCart={ handleRemoveFromCart }
/>
```