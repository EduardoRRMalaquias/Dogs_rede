import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input/Input';
import Button from '../Forms/Button/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Erro from '../Helper/Erro';
import estilos from './LoginForm.module.css';
import estiloBtn from '../Forms/Button/Button.module.css';
import Head from '../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, erro, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Login" description="Faça login na rede social Dogs" />
      <h1 className="title">Login</h1>
      <form className={estilos.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Erro erro={erro && "Dados incorretos"} />
      </form>
      <Link className={estilos.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={estilos.cadastro}>
        <h2 className={estilos.subtitulo}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se</p>
        <Link className={estiloBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
