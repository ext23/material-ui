import {React, useState} from 'react'
import { AppBar, Typography, Toolbar, createMuiTheme, IconButton, Button } from '@material-ui/core';
import Drawer from '../src/Drawer'
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon  } from '@material-ui/icons'

const theme = createMuiTheme({
    typography: {
      subtitle1: {
        fontSize: 20,
        color: 'red'
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
    loginButton: {      
      left: '75%',
    },    
  });

export default function JudgeModeForm(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>        
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(!drawerOpen)} >           
          </Drawer>         
          <AppBar position="static">              
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>          
            <Typography variant="h6" className={classes.title}> 
              Добро пожаловать, {props.userName}!
            </Typography>          
            <Button color="inherit" className={classes.loginButton}>Выйти</Button>
          </Toolbar>
          </AppBar>
        </div>
    );
}