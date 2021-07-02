import { cloneElement, React, useState } from 'react'
import { AppBar, Typography, Toolbar, createMuiTheme, IconButton, Button } from '@material-ui/core';
import Drawer from './Drawer'
import { Menu as MenuIcon } from '@material-ui/icons'
import { useStyles } from '../style'
import { connect } from 'react-redux';
import appRoutes from './Routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

const MainForm = (props) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const routes = appRoutes.map((item) => {    
    return <Route path={item.path}>{cloneElement(item.component)}</Route>;
    }
  );

  return (
    <BrowserRouter>
      <div>
       <Drawer open={drawerOpen} onClose={() => setDrawerOpen(!drawerOpen)} routes={appRoutes}> 
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Добро пожаловать {props.userName}!
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          {routes}
        </Switch>        
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
  };
}

export default connect(mapStateToProps, null)(MainForm);