import React, { useState , useEffect } from 'react';
import { theme, useStyles } from '../style';
import Button from '@material-ui/core/Button';
import { Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { createUser, initUser } from '../redux/action';
import { useGetSessionQuery } from '../api';

function LoginForm(props) {
    const classes = useStyles();
    //const [error, setError] = useState(null);    
    const [credentials, setCredentials] = useState({});
    const [skip, setSkip] = useState(false);
    const [userLogin, setUserLogin] = useState({login: '1', pass: '2'});
    //const { data, error, isLoading } = useGetSession({});

    //const { data, error, isLoading } = useGetSession();
    const { data, error, isError } = useGetSessionQuery( userLogin.login, { skip } );
  
    /*
    function fetchData(e) {
      e.preventDefault();
      fetch("http://89.17.51.75:4089/carpfishing_test/hs/v1/session?username=" + e.target.elements.login.value + "&password=" + e.target.elements.password.value)
      .then(res => res.json())
      .then(
        (result) => {          
          setCredentials(result);    
        },
        (error) => {          
          setError(error);
        }
      );
    }
    */

    const login = (e) => {
      setSkip(false);      
      setUserLogin({ login: e.target.elements.login.value, pass: e.target.elements.password.value });
    }
  
    useEffect(() => {                
      if (credentials.userName) {props.createUser(credentials)} else props.initUser();
    });
  
    return (
      <ThemeProvider theme={theme}>      
        <Paper className={classes.root} variant="outlined" square elevation={3} >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={login}>          
            <Typography>Вход в систему</Typography>
            {!error || <Typography variant="subtitle1">Ошибка загрузки данных</Typography>}
            {!props.isAuth || <Typography variant="subtitle1">{props.userName}</Typography>}
            <TextField className={classes.login} id="login" label="Логин" variant="outlined"></TextField>
            <TextField className={classes.login} id="password" label="Пароль" variant="outlined" type="password"></TextField>
            <Button type="submit" variant="contained" color="primary" className={classes.login}>Войти</Button>
          </form>
        </Paper>
      </ThemeProvider>
    );
  }

const mapDispatchToProps = {
  createUser,
  initUser
}

const mapStateToProps = state => {
  return {
    isAuth: state.user.isAuth,
    userName: state.user.userName,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)