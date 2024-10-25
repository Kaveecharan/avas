import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMenu } from '../redux/menuSlice';
import { Link, useParams } from 'react-router-dom';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import './MerchantsPage.css';

const MenuPage = () => {
  const { merchantId } = useParams();
  const menuItems = useSelector(selectMenu).filter(item => item.merchantId === parseInt(merchantId));
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCities = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    loadCities();
  }, []);

  const filteredMenu = menuItems.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || !category || item.category === category)
  );

  const searchCategory=(name)=>{
    setSearch('')
    setCategory(name)
  }

const categories = [
  { name: 'All', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Indian', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Western', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Western', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Western', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Western', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
  { name: 'Western', image: 'https://img.freepik.com/free-photo/appetizing-slice-pizza-flat-lay-generative-ai_169016-28936.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=ais_user' },
];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === categories.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className="merchants-page">
      <input 
        type="text" 
        className='merchant-search'
        placeholder="Filter Items..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <p className='cat-text'>Category</p>
      <div className="category-carousel">
        <button className="carousel-button" onClick={handlePrev}>
          <GrFormPrevious className='carousel-button-icon'/>
        </button>
        <div className="carousel-container">
        {loading ? (
              new Array(5).fill(0).map((_, index) => (
                <div className="category-skeleton" key={index}>
                  <div className="image"></div>
                  <p className="category-name"></p>
                </div>
              ))
            ) : (
              categories.map((cat, index) => (
                <div
                  className="category-item"
                  key={cat.name}
                  style={{
                    transform: `translateX(${-currentIndex * 100}%)`,
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    onClick={() => searchCategory(cat.name)}
                  />
                  <p className="category-name">{cat.name}</p>
                </div>
              ))
            )}
        </div>
        <button className="carousel-button" onClick={handleNext}>
          <GrFormNext className='carousel-button-icon'/>
        </button>
      </div>
      <div className="boxes">
        {loading ? (
          filteredMenu.map(item => (
            <div className="skeleton" key={item.id}>
              <div className="image"></div>
              <h4></h4>
            </div>
          ))
        ) : (
          filteredMenu.map(item => (
            <Link to={`/food/${item.id}`} key={item.id} className="box">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuPage;
