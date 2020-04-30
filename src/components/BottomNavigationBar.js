import React from 'react';

import {

    BottomNavigation,
    BottomNavigationAction,
    AppBar,
    makeStyles,
} from '@material-ui/core';

import StopIcon from '@material-ui/icons/Stop';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';




export default function BottomNavigationBar() {
    const useStyles = makeStyles((theme) => ({
        text: {
            padding: theme.spacing(2, 2, 0),
        },
        paper: {
            paddingBottom: 50,
        },
        list: {
            marginBottom: theme.spacing(2),
        },
        subheader: {
            backgroundColor: theme.palette.background.paper,
        },
        appBar: {
            top: 'auto',
            bottom: 0,
        },
        grow: {
            flexGrow: 1,
        },
        fabButton: {
            position: 'absolute',
            zIndex: 1,
            top: -30,
            left: 0,
            right: 0,
            margin: '0 auto',
        },
    }));

    const classes = useStyles();

    function openGitHub() {
        const url = 'https://github.com/uptimizt/app-m9';
        window.open(url, '_blank');
    }

    return (

        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction
                    label="Play"
                    icon={<PlayCircleOutlineIcon />}
                />

                <BottomNavigationAction
                    label="Stop"
                    icon={<StopIcon />}
                />

                <BottomNavigationAction
                    label="GitHub"
                    icon={<GitHubIcon />}
                    href="https://github.com/uptimizt/app-m9"
                    target="_blank"
                    // onClick={() => { this.openGitHub }}
                />

            </BottomNavigation>
        </AppBar>
    );
}
