import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import AppsIcon from '@material-ui/icons/Apps';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
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
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NoteIcon from '@material-ui/icons/Note';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./Drawer.css"
import { Link } from 'react-router-dom';

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

const Drawers = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const styleOfDrawer = "font-weight-bold text-light"
    const drawer = (
        <div className="drawer-area">
            <div className={`${classes.toolbar}`} />
            <Divider />
            <List >

                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <AppsIcon /> <h6 className="ml-4 mt-1 font-weight-bold">DashBoard</h6></ListItemIcon>
                    <ListItemText />
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <CalendarTodayIcon /> <Link to="/appointment"> <h6 className="ml-4 mt-1 font-weight-bold text-light"> Appointment </h6></Link></ListItemIcon>
                    <ListItemText />
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <SupervisorAccountIcon /> <Link to="/comingSoon"> <h6 className="ml-4 mt-1 font-weight-bold text-light"> Patients </h6></Link></ListItemIcon>
                    <ListItemText />
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <NoteIcon style={{ transform: "rotate(270deg)", }} /> <Link to="/comingSoon"> <h6 className="ml-4 mt-1 font-weight-bold text-light"> Prescriptions </h6></Link></ListItemIcon>
                    <ListItemText />
                </ListItem>
                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <SettingsIcon /> <Link to="/comingSoon"> <h6 className="ml-4 mt-1 font-weight-bold text-light"> Settings </h6></Link></ListItemIcon>
                    <ListItemText />
                </ListItem>

            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon className={`${styleOfDrawer}`}> <ExitToAppIcon /> <Link to="/home"> <h6 className="ml-4 mt-1 font-weight-bold text-light"> Log Out </h6></Link></ListItemIcon>
                    <ListItemText />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className="d-md-none d-sm-block" style={{ backgroundImage: "linear-gradient(#18D2AE, #0fcfec)" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Admin Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
};

export default Drawers;