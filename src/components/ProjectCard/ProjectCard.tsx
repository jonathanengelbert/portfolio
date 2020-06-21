import React from 'react';
import {openInNewWindow} from "../../utils";

import './projectCardStyles.scss'

// MATERIAL UI CONFIG
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: '61%',
        color: 'white',
        // fontWeight: 900,
        backgroundColor: '#d0d5d3',
    },
    header: {
        color: 'white',
        textShadow: '2px 4px 3px rgba(0,0,0,0.3)',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

type Props = {
    title: string,
    stack: string,
    shortDescription: string,
    longDescription: string,
    image?: string,
    githubLink: string;
    liveLink: string;
}

const ProjectCard: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}
        >
            <CardHeader
                classes={{subheader: classes.header}}
                className={classes.header}
                title={props.title}
                subheader={props.stack}
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/image-sample.png"
                title={props.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.shortDescription}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    aria-label="Live Code"
                    onClick={() => openInNewWindow(props.liveLink)}
                >
                    <DesktopMacIcon/>
                </IconButton>

                <IconButton
                    aria-label="Source Code"
                    onClick={() => openInNewWindow(props.githubLink)}
                >
                    <GitHubIcon/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {props.longDescription}
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default ProjectCard;