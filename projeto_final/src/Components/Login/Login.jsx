import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginForgot from './LoginForgot';
import LoginReset from './LoginReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />;
  return <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="forgot" element={<LoginForgot />} />
      <Route path="reset" element={<LoginReset />} />
    </Routes>
  </div>;
};

export default Login;