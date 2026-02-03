import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AdicionarFoto from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import style from './UserHeaderNav.module.css';
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);

  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && 
        <button 
          aria-label="Menu" 
          className={`${style.mobileButton} 
            ${mobileMenu && style.mobileButtonActive}
          `}
          onClick={() => setMobileMenu(!mobileMenu)}>
        </button>
      }
      <nav 
        className={`${mobile ? style.navMobile : style.nav} 
          ${mobileMenu && style.navMobileActive}`
        }>
        <NavLink to="/conta" end> 
          <MinhasFotos /> 
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <AdicionarFoto />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
}

export default UserHeaderNav;