import React, { useState , useEffect } from 'react';
import { theme, useStyles } from './style';
import Button from '@material-ui/core/Button';
import { Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';

export default function LoginForm(props) {
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
        props.onAuth(isAuth, items);    
      }    
    });
  
    return (
      <ThemeProvider theme={theme}>      
        <Paper className={classes.root} variant="outlined" square elevation={3} >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={fetchData}>          
            <Typography>Вход в систему</Typography>
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