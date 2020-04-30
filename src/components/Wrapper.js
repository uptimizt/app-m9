import React, { useEffect, useState } from 'react';
import BottomNavigationBar from './BottomNavigationBar.js';

import {
    Container,
    List,
    ListItem,
    Button,
    CssBaseline,
    Typography,
    Box,
    makeStyles,

} from '@material-ui/core';

export default function Wrapper() {

    return (

        <React.Fragment>
            <CssBaseline />
                <Box
                    m={3}
                    mb={11}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    // height="80vh"
                    style={{ height: "calc(100vh - 115px)" }}
                >
                    
                    <Box 
                    boxShadow={3}
                    bgcolor="background.paper"
                    p={3}
                    

                    >
                        <Typography variant="h3" component="body1">
                            Meditation
                        </Typography>
                    </Box>
                </Box>

                {/* <Container maxWidth="sm">

            </Container> */}
            <BottomNavigationBar />
        </React.Fragment>

    );
}
