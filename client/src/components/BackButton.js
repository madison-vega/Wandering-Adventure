import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BackButton() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to={'/'}>
                <Button
                    className={classes.root}
                    variant="contained"
                >
                    Go Back
                </Button>
            </Link>
        </div>
    );
}