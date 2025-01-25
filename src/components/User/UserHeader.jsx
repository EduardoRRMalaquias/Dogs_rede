import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import estilos from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState();
  const { pathname } = useLocation();

  React.useEffect(() => {
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatisticas');
        break;
      case '/conta/postar':
        setTitle('Postar Foto');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [pathname]);

  return (
    <header className={estilos.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
