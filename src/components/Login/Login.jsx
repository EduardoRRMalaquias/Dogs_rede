import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCriar from './LoginCriar';
import LoginPerdeuSenha from './LoginPerdeuSenha';
import LoginResetarSenha from './LoginResetarSenha';
import { UserContext } from '../../UserContext';
import estilo from './Login.module.css';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={estilo.login}>
      <div className={estilo.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCriar />} />
          <Route path="perdeu" element={<LoginPerdeuSenha />} />
          <Route path="resetar" element={<LoginResetarSenha />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
