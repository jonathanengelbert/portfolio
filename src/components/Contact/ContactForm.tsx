import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

type Props = {
   formOpen: boolean,
   setFormOpen: Function
}

const ContactForm = (props: Props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        props.setFormOpen(true);
    };

    const handleClose = () => {
        props.setFormOpen(false);
    };

    return (
        <div>
            {/*<button type="button" onClick={handleOpen}>*/}
            {/*</button>*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.formOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.formOpen}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">
                            Send me a Message!
                        </h2>
                        <p id="transition-modal-description">
                            I will reply in less than 24 hours
                        </p>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Standard" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </form>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default ContactForm;
