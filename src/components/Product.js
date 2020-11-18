import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';

const Product = ({ id, title, rating, image, price }) => {
  const ratingInt = parseInt(rating);
  const [{basket}, dispatch] = useStateValue();
  
  const addToBasket = () => {
    //Add item to basket
    dispatch ({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image, 
        price: price, 
        rating: rating
      }, 
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(ratingInt)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt={title}/>
      <button onClick={addToBasket}>
        <ShoppingBasketIcon />
        <p>Add to Basket</p>
      </button>
      <br></br>
    </div>
  );
};

export default Product;