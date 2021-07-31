import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
  <Toolbar>
    {/* <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Typography variant="h4" className={classes.title}>
      Comtron
    </Typography>
    <Link to="/" style={{textDecoration:"none",color:"white"}}>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <HomeIcon fontSize="large" color="secondary" style={{color:'white'}} />
    </IconButton>
    </Link>
    <Button variant="contained" color="primary">
      <Link to="/login" style={{textDecoration:"none",color:'white'}}>
        Logout
        </Link>
        </Button>
  </Toolbar>
</AppBar>
    )
}
