import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputForm1 from './sub-Folder/InputForm1';
import PieChart from '../Components/PieChart';
import DataTables from '../Components/DataTables';
import { AnyARecord } from 'dns';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function RequisitionPage(props:any) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleDrawerToggle = () => {
    console.log('handleDrawerToggle');
    setMobileOpen(!mobileOpen);
  };
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Typography variant="h5" align="center">
        Requisition Page
      </Typography>
      <Divider />
      {/* <List> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        >
        {['Add new Requisition', 'Request Entry from Remote orders', 'Fast Requisition Entry', 'Quick Accession Remote Order'].map((text, index) => (
          // <ListItem button key={text}>
          <>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            {/* <ListItemText primary={text} /> */}
            <Tab label={text} {...a11yProps(index)} />
            {/* </ListItem> */}
            </>
        ))} 
        </Tabs>
      {/* </List> */}
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <Tab label={text} {...a11yProps(index)} />
            
          </ListItem>
        ))}
      </List>
    </div>
  );
  function a11yProps(index:any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        
        style={{width:"300px",minWidth:"300px",height:"100vh",borderRight:"1px solid #ccc",margin:"0 auto"}}
      >
        <Tab label="Add new Requisition" {...a11yProps(0)} />
        <Tab label="Request Entry from Remote orders" {...a11yProps(1)} />
        <Tab label="Fast Requisition Entry" {...a11yProps(2)} />
        <Tab label="Quick Accession Remote Order" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TabPanel value={value} index={0}>
        <InputForm1 />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PieChart data={[12, 19, 3, 5, 2, 3]} labels={["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataTables />
        <PieChart data={[26, 39, 59, 15, 2, 3,26, 39, 59, 15, 2, 3]} labels={["Kota", "Kumar", "David", "Venkat", "Someone", "new","Red", "Blue", "Yellow", "Green", "Purple", "Orange"]}/>
        
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      </main>
    </div>
  );
}

export default RequisitionPage;


function TabPanel(props:any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}