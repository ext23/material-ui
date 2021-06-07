import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core';
import { deepOrange, indigo } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: deepOrange,
    }
});

export const useStyles = makeStyles({
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
    loginButton: {      
      left: '75%',
    },    
  });