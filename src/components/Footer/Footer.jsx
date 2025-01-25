import React from 'react';
import estilo from './Footer.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../../Assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <footer className={estilo.footer}>
      <Dogs />
      <p>
        Dogs. © Todos os direitos reservados a{' '}
        <a
          target="_blank"
          href="https://eduardorrmalaquias.github.io/projeto_portifolio/"
        >
          Eduardo R R M
        </a>
      </p>
    </footer>
  );
};

export default Footer;
