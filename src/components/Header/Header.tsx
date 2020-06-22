import React from 'react';

// MATERIAL UI config
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './headerStyles.scss';
import TablePaginationActions from "@material-ui/core/TablePagination/TablePaginationActions";
import IconButton from "@material-ui/core/IconButton";
import {openInNewWindow} from "../../utils";
import CardActions from "@material-ui/core/CardActions";

const Header = () => {
    return (
        <header className={'app-header'}>
            <h1>Jonathan Engelbert</h1>
            <h2>Full Stack Web Developer and GIS Engineer</h2>
            <IconButton
                aria-label="Personal Github"

                onClick={() => openInNewWindow('https://github.com/jonathanengelbert')}
            >
                <GitHubIcon fontSize={"large"}/>
            </IconButton>
            <IconButton
                aria-label="Source Code"
                onClick={() => openInNewWindow('https://www.linkedin.com/in/jonathan-engelbert/')}
            >
                <LinkedInIcon fontSize={"large"}/>
            </IconButton>
        </header>
    )
};


export default Header;