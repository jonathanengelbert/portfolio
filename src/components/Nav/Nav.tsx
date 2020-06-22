import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

// MATERIAL UI config
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ContactForm from '../Contact/ContactForm';

import './navStyles.scss';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const classes = useStyles();

    return (
        <nav className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <p className={"logo"}>Jonathan Engelbert</p>
                    </Typography>
                    <Button color="inherit">Resume</Button>
                    <Button color="inherit" onClick={() => setFormOpen(true)}>
                        Contact
                    </Button>
                    <ContactForm
                        setFormOpen={setFormOpen}
                        formOpen={formOpen}
                    />
                </Toolbar>
            </AppBar>
        </nav>
    );
}