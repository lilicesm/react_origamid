import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginReset from './LoginReset';
import { UserContext } from '../../UserContext';
import style from './Login.module.css';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />;
  return <section className={style.login}>
    <div className={style.forms}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="forgot" element={<LoginForgot />} />
        <Route path="reset" element={<LoginReset />} />
      </Routes>
    </div>
  </section>;
};

export default Login;