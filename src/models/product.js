import DefineMap from 'can-define/map/map';
import DefineList from 'can-define/list/list';
import { products } from './fixtures/products';

const Product = DefineMap.extend(
  'Product',
  {
    getList() {
      return Promise.resolve(new Product.List(products));
    }
  },
  {
    id: 'string',
    name: 'string',
    image: 'string',
    desc: 'stirng'
  }
);

Product.List = DefineList.extend('ProductList', {
  '#': Product
});

export default Product;
