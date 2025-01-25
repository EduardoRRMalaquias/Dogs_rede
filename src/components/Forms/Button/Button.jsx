import React from 'react';
import estilo from './Button.module.css';

const Button = ({ children, ...props }) => {
  return (
    <button className={estilo.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
