import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
      <img 
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg"
        alt="amazon-banner"
        className="home__image"
      />
      <div className="home__row">
        <Product 
          id="B08759387K"
          title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
          image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
          price={7749}
          rating={4.2}
        />
        <Product 
          id="B0875387K"
          title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
          image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
          price={7749}
          rating={4.2}
        />
      </div>
      <div className="home__row">
        <Product 
          id="B0875987K"
          title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
          image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
          price={7749}
          rating={4.2}
        />
        <Product 
          id="B0759387K"
          title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
          image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
          price={7749}
          rating={4.2}
        />
        <Product 
          id="B08759387"
          title="Samsung 21.5 inch (54.6 cm) LED Bezel Less Computer Monitor - Full HD, Super Slim AH-IPS Panel - LS22R350FHWXXL"
          image="https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._SL1500_.jpg"
          price={7749}
          rating={4.2}
        />
      </div>
    </div>
  );
};

export default Home;