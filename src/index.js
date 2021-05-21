import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon  from '@material-ui/icons/Home';
import TeamIcon  from '@material-ui/icons/Group';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  class MenuIcon extends React.Component {
    render() {
      const MenuIcon = this.props.iconName;      
      return <MenuIcon />
    }
  }

  const list = (anchor) => {
    const mainMenu = [
      { name: 'Домой', icon: (<HomeIcon />)},
      { name: 'Команды', icon: (<TeamIcon />) },
      { name: 'Выход', icon: (<ExitToAppIcon />) },
    ];

    return (
      <div
        className='left'
        role="presentation"
        onClick={toggleDrawer({ anchor }, false)}
        onKeyDown={toggleDrawer({ anchor }, false)}
      >
        <List>
          {
            mainMenu.map((menuItem, index) => {                  
             return (
                <ListItem button key={menuItem.name}>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.name} />
                </ListItem>
              )
            }
            )
          }
        </List>
        <Divider />
      </div>
    );
  }

  const anchor = 'left'

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer(anchor, true)}>Меню</Button>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

ReactDOM.render(
  <TemporaryDrawer />,
  document.getElementById('root')
);