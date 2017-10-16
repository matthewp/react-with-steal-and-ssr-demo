import Product from './product';

let instance;
const Cart = Product.List.extend(
  'Cart',
  {
    getCart() {
      if (instance) {
        return instance;
      }
      instance = new Cart();
      return instance;
    }
  },
  {
    total: {
      get() {
        const totalx100 = this.map(product => product.price)
          .filter(price => price)
          .reduce((total, price) => total + price * 100, 0);
        return (totalx100 / 100).toFixed(2);
      }
    },
    has(product) {
      return this.indexOf(product) !== -1;
    }
  }
);

export default Cart;
