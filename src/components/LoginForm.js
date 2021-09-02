import React, { useState , useEffect } from 'react';
import { theme, useStyles } from '../style';
import Button from '@material-ui/core/Button';
import { Paper, TextField, ThemeProvider, Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { createUser, initUser } from '../redux/action';
import { useGetSessionQuery } from '../api';
import CircularProgress from '@material-ui/core/CircularProgress';

function LoginForm(props) {
    const classes = useStyles();
    const [credentials, setCredentials] = useState({});
    const [skip, setSkip] = useState(true);
    const [userLogin, setUserLogin] = useState({login: '', pass: ''});
    const { data, error, isLoading } = useGetSessionQuery( { login: userLogin.login, pass: userLogin.pass } , { skip });
  
    const login = (e) => {
      e.preventDefault();
      setSkip(false);      
      setUserLogin({ login: e.target.elements.login.value, pass: e.target.elements.password.value });      
    }
  
    useEffect(() => {      
      setCredentials(data);          
      if (credentials && credentials.userName) {props.createUser(credentials)} else props.initUser();      
    });
  
    return (
      <ThemeProvider theme={theme}>      
        <Paper className={classes.root} variant="outlined" square elevation={3} >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={login}>          
            <Typography>Вход в систему</Typography>
            
            {!isLoading || <CircularProgress /> }
            {!error || <Typography variant="subtitle1">Ошибка загрузки данных: {error.status}</Typography>}
            {!data || <Typography variant="subtitle1">{data.userName}</Typography>}                                                      

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
    matchId: state.user.matchId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)