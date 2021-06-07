import {React, useState} from 'react'
import { AppBar, Typography, Toolbar, createMuiTheme, IconButton, Button } from '@material-ui/core';
import Drawer from '../src/Drawer'
import { Menu as MenuIcon  } from '@material-ui/icons'
import { useStyles } from './style'

export default function JudgeModeForm(props) {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>        
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(!drawerOpen)} routes={props.routes}>           
          </Drawer>         
          <AppBar position="static">              
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>          
            <Typography variant="h6" className={classes.title}> 
              Добро пожаловать, {props.loginData.userName}!
            </Typography>          
            <Button color="inherit" className={classes.loginButton}>Выйти</Button>
          </Toolbar>
          </AppBar>
          <div>            
          </div>
        </div>
    );
}