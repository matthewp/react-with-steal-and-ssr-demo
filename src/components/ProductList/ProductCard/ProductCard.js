import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap.css';
import './ProductCard.less';

const ProductCard = ({ image, name, desc, price, inCart, onRemove, onAdd }) => {
  const buttonProps = {
    bsStyle: inCart ? 'danger' : 'primary',
    onClick: inCart ? onRemove : onAdd,
    text: inCart ? 'Remove from Cart' : 'Add to Cart'
  };
  return (
    <div className="product-card">
      <img className="product-image" src={image} />
      <div className="product-description">
        <h3>{name}</h3>
        <p>{desc}</p>
        <footer>
          <span className="price">${price}</span>
          <Button bsStyle={buttonProps.bsStyle} onClick={buttonProps.onClick}>
            {buttonProps.text}
          </Button>
        </footer>
      </div>
    </div>
  );
};

export default ProductCard;
