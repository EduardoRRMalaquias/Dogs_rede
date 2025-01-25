import React from 'react';

const validacao = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    mensagem: 'Preencha um email valido',
  },
  password: {
    regex: /^(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]) $/,
    mensagem:
      'A senha precisa ter, 1 caracter maiusculo (A-Z), 1 caracter minusculo (a-z), 1 caracter especiarl ($,@,#...) e um caracter numerico (0-9), minimo de 8 caracteres',
  },
  numero: {
    regex: /^\d+$/,
    mensagem: 'Ultilize numeros apenas',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preenche um valor');
      return false;
    } else if (validacao[type] && !validacao[type].regex.test(value)) {
      setError(validacao[type].mensagem);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    error,
    onBlur: () => validate(value),
  };
};

export default useForm;
