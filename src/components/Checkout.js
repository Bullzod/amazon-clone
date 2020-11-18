import React from 'react';
import { useStateValue } from '../StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div>
            <h2 className="checkout__title">Your Shopping Cart is empty</h2>
            <p>You have no items in your basket. To add more items, click on the <i>Add to Basket</i> next to the item you want to add.</p>
          </div>
        ) : (
          <div className="checkout__products">
            <h2 className="checkout__title">Your Shopping Cart</h2>
            {basket.map(item => (
              <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        {basket?.length > 0 ? (
          <Subtotal />
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Checkout;