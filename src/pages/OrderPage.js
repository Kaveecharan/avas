import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCities } from '../redux/citiesSlice';
import { Link } from 'react-router-dom';
import './OrderPage.css';

const OrderPage = () => {
  const [loading, setLoading] = useState(true);
  const cities = useSelector(selectCities);

  useEffect(() => {
    const loadCities = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    loadCities();
  }, []);

  return (
    <div className="order-page">
      <h1 className='order-heading'>Select a City</h1>
      <div className="city-list">
        {loading ? (
          cities.map(city => (
            <div className="city-item" key={city.id}>
              <div className="image"></div>
            </div>
          ))
        ) : (
          cities.map(city => (
            <Link to={`/merchants/${city.id}`} key={city.id} className="city-item">
              <img src={city.image} alt={city.name} />
              <p>{city.name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderPage;
