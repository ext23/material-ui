import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
import JudgeModeForm from '../src/judgemodeform';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { createMuiTheme, Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 20,
    },
  },
  palette: {
    primary: {
      main: '#3f51b5'
    },
    secondary: {
      main: '#0288d1'
    }
  },
});

const useStyles = makeStyles({
  paper: {
    display: 'flex'    
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    position: 'absolute',
    top: '30%',
    left: '40%',
    '& > *': {
      margin: theme.spacing(2),
      width: '25ch',
    }
  },
  login: {
    display: 'block',
  },   
});

function LoginForm(props) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoad, setIsLoaded] = useState(false);
  const [items, setItems] = useState({});
  const [login, setLogin] = useState(null);
  const [isAuth, setAuth] = useState(false);

  function fetchData(e) {
    e.preventDefault();
    fetch("http://89.17.51.75:4089/carpfishing_test/hs/v1/session?username=" + e.target.elements.login.value + "&password=" + e.target.elements.password.value)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result);
        setAuth(true);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
        console.log('error ' + (error));
      }
    );
  }

  useEffect(() => {    
    if (isAuth) {
      props.onAuth(isAuth, items.userName);    
    }    
  });

  return (
    <ThemeProvider theme={theme}>      
      <Paper className={classes.root} variant="outlined" square elevation={3} >
        <form className={classes.root} noValidate autoComplete="off" onSubmit={fetchData}>          
          <Typography variant="subtitle1">Вход в систему</Typography>
          {!error || <Typography variant="subtitle1">Ошибка загрузки данных</Typography>}
          {!isLoad || <Typography variant="subtitle1">{items.userName}</Typography>}
          <TextField className={classes.login} id="login" label="Логин" variant="outlined"></TextField>
          <TextField className={classes.login} id="password" label="Пароль" variant="outlined" type="password"></TextField>
          <Button type="submit" variant="contained" color="primary" className={classes.login}>Войти</Button>
        </form>
      </Paper>
    </ThemeProvider>
  );
}

function App() {
  const [auth, setAuth] = useState(false);
  const [userName, setUserName] = useState(null);

  function onAuth(isLog, userName) {
    setAuth(isLog);
    if (isLog) {
      setUserName(userName);
    }
  }
  
  return (
    auth ? <JudgeModeForm userName={userName}/> : <LoginForm onAuth={onAuth} something="asdf"/>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);