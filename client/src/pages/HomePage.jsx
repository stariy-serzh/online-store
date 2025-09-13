import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Добро пожаловать в наш магазин!</h2>
      <p>Лучшие товары по лучшим ценам</p>
      <Link to="/catalog">
        <button style={{ padding: '15px 30px', fontSize: '18px', marginTop: '20px' }}>
          Перейти к покупкам
        </button>
      </Link>
    </div>
  );
};

export default HomePage;