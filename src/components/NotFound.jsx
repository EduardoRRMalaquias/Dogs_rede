import React from 'react';
import { Link } from 'react-router-dom';
import estilo from './Forms/Button/Button.module.css';

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <h1 className="title">Error: 404</h1>
      <p style={{ marginBottom: '2rem' }}>Pagina não encontrada.</p>
      <Link to="/" className={estilo.button}>
        Voltar
      </Link>
    </div>
  );
};

export default NotFound;
