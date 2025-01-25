import React from 'react';
import estilo from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../../Assets/dogs.svg?react';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <header className={estilo.header}>
      <nav className={`container ${estilo.nav}`}>
        <Link className={estilo.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className={estilo.login} to="conta">
            {data.nome}
          </Link>
        ) : (
          <Link className={estilo.login} to="login">
            Login / cadastrar
          </Link>
        )}
       
      </nav>
    </header>
  );
};

export default Header;
