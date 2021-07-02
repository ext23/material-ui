import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import JudgeModeForm from '../src/judgemodeform';
import './index.css';
import ROUTES from './routes';
import { createStore } from 'redux';

function App() {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState(null);
  const [loginData, setLoginData] = useState(
    {
      userName: null,
      matchName: null,
      someField: null
    }
  );

  function onAuth(isLog, updatedloginData) {
    setAuth(isLog);
    if (isLog) {
      setLoginData(Object.assign({}, loginData, updatedloginData));
    }
  }

  if (!auth) {
    return (<LoginForm onAuth={onAuth} />);
  }

  return (
      <JudgeModeForm loginData={loginData} routes={ROUTES} />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);