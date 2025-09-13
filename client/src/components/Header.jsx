import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#f8f9fa', borderBottom: '1px solid #ddd' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
          <h1>🛒 Мой Магазин</h1>
        </Link>
        <nav>
          <Link to="/catalog" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>
            Каталог
          </Link>
          <Link to="/cart" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>
            Корзина
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
