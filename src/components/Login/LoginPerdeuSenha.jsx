import React from 'react';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Erro from '../Helper/Erro';
import Head from '../Helper/Head';

const LoginPerdeuSenha = () => {
  const login = useForm();
  const { data, loading, erro, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { response, json } = await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu senha" description="Recupere sua senha aqui" />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando email...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}
      <Erro erro={erro} />
    </section>
  );
};

export default LoginPerdeuSenha;
