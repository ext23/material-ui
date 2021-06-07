import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import JudgeModeForm from '../src/judgemodeform';
import './index.css';
import ROUTES from './routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

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
  
  return (    
    auth ? <JudgeModeForm loginData={loginData} routes={ROUTES}/> : <LoginForm onAuth={onAuth}/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);