import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../Assets/dog.svg?react';

const Header = () => {
  return <header className={style.header}>
    <nav className={`${style.nav} container`}>
      <Link className={style.logo} to="/" aria-label='Dogs - Home'>
        <Dog />
      </Link>
      <Link className={style.login} to="/login">Login / Cadastro</Link>
    </nav>
  </header>;
};

export default Header;