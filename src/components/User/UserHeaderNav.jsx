import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import MinhasFotos from '../../Assets/feed.svg?react';
import Estatisticas from '../../Assets/estatisticas.svg?react';
import AddFotos from '../../Assets/adicionar.svg?react';
import Sair from '../../Assets/sair.svg?react';
import estilos from './UserHeaderNav.module.css';
import useMedia from '../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  function handleLogout() {
    userLogout();
    navigate('/login');
  }

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${estilos.mobileBtn} ${mobileMenu && estilos.active}`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav>
        <menu
          className={`${mobile ? estilos.menuMobile : estilos.menu} ${
            mobileMenu && estilos.menuActive
          }`}
        >
          <li>
            <NavLink to="/conta" end>
              <MinhasFotos />
              {mobile && 'Minhas Conta'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/conta/estatisticas">
              <Estatisticas />
              {mobile && 'Estatisticas'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/conta/postar">
              <AddFotos />
              {mobile && 'Adicionar Fotos'}
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>
              <Sair />
              {mobile && 'Sair'}
            </button>
          </li>
        </menu>
      </nav>
    </>
  );
};

export default UserHeaderNav;
