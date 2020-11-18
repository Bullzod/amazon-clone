import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../reducer';

const Subtotal = () => {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <h1>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </h1>
            <small className="subtotal__gift">
              <input type="checkbox" />&nbsp;This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={0}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;