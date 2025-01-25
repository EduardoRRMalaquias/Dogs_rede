import React from 'react';
import estilo from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={estilo.campo}>
      <label className={estilo.label} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={estilo.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={estilo.erro}>{error}</p>}
    </div>
  );
};

export default Input;
