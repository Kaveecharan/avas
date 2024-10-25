import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMenu } from '../redux/menuSlice';
import { useParams } from 'react-router-dom';
import './FoodPage.css';

const FoodPage = () => {
  const { foodId } = useParams();
  const food = useSelector(selectMenu).find(item => item.id === parseInt(foodId));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="food-page">
      {loading ? (
        <>
          <div className="food-page-left">
            <div className="skeleton skeleton-image"></div>
          </div>
          <div className="food-page-right">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-button"></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </>
      ) : (
        <>
          <div className="food-page-left">
            <img src={food.image} alt={food.name} />
          </div>
          <div className="food-page-right">
            <h1>{food.name}</h1>
            <p>Price: ${food.price}</p>
            <p>Category: {food.category}</p>
            <p>Merchant ID: {food.merchantId}</p>
            <button onClick={() => window.location.href='https://play.google.com/store'}>Order on Google Play</button>
            <button onClick={() => window.location.href='https://www.apple.com/app-store/'}>Order on App Store</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FoodPage;
