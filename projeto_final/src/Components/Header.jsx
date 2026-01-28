import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return <div className={style.header}>
    <nav className='container'>
      <Link to="/">Home</Link>
      <span> </span>
      <Link to="/login">Login / Cadastro</Link>
    </nav>
  </div>;
};

export default Header;