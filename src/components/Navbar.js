import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';

const Navbar = () => {
  const [{basket, user}, dispatch]= useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return(
    <div className="navbar">
      <Link to="/">
        <img className="navbar__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo"/>
      </Link>

      <div className="navbar__search">
        <input type="text" className="navbar__searchInput"/>
        <SearchIcon className="navbar__searchIcon"/>
      </div>

      <div className="navbar__nav">
        <Link to={!user && "/login"} className="navbar__link">
          <div className="navbar__option">
            <span className="lineOne">{user? `Hello ${user.email}` : `Hello Guest`}</span>
            <span className="lineTwo" onClick={handleAuthentication}>{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        {/* <Link className="navbar__link">
          <div className="navbar__option">
            <span className="lineOne">Returns</span>
            <span className="lineTwo">&amp; Orders</span>
          </div>
        </Link>

        <Link className="navbar__link">
          <div className="navbar__option">
            <span className="lineOne">Your</span>
            <span className="lineTwo">Prime</span>
          </div>
        </Link> */}

        <Link to="/checkout" className="navbar__link">
          <div className="navbar__basket">
            <ShoppingBasketIcon />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;