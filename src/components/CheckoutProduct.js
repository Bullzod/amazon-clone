import React from 'react';
import './CheckoutProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const ratingInt = parseInt(rating);
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image"/>
      
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(ratingInt)
            .fill()
            .map((_) => (
              <StarIcon />
            ))}
        </div>

        <button onClick={removeFromBasket}>
          <p>Remove from Basket</p>
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;