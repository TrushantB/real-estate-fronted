import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {menu} from './src/pages/menu';
import OngoingSite from './src/pages/ongoing-site';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
    // component:null
  });
  
  const [component , setComponents] = React.useState(<OngoingSite/>);


  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({...state, [anchor]: open });
    
  };
  const setComponent = (index) => event => {
    setComponents(index)
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menu.map((item, index) => (
          <ListItem button key={index} onClick={setComponent(item.component)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
       <CssBaseline />
      <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Builder App
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
          <IconButton onClick={toggleDrawer('left', false)}>
             <ChevronLeftIcon /> 
          </IconButton>
            {list('left')}
          </Drawer>
      ))}
      <div style={{marginTop:"40px"}}>
      {component}
      </div>
    </div>
  );
}
