import React from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../Assets/dog.svg?react';
import { UserContext } from '../UserContext';

const Header = () => {
  const {data, userLogout} = React.useContext(UserContext);

  return <header className={style.header}>
    <nav className={`${style.nav} container`}>
      <Link className={style.logo} to="/" aria-label='Dogs - Home'>
        <Dog />
      </Link>
      {data ? (
        <>
          <Link className={style.login} to="/conta">
            {data.nome}
          </Link>
          <button onClick={userLogout}>Sair</button>
        </>
      ) : (
        <Link className={style.login} to="/login">
        Login / Cadastro
        </Link>
      )}
    </nav>
  </header>;
};

export default Header;