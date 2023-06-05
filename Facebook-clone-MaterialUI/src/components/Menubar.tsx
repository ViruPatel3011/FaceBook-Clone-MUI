import React from 'react'

import { Box, IconButton, useMediaQuery } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";


const Menubar = () => {
    const isLargeScreen = useMediaQuery('(max-width:800px)');
    const smallIcon = useMediaQuery('(max-width:600px )');


    return (
        <Box sx={{
            display: isLargeScreen ? 'flex' : 'none',
            justifyContent: 'center',

        }}>
            <IconButton sx={{margin:smallIcon?'0 0.3rem':'0 0.5rem',padding:smallIcon?'0.7rem 0.7rem':'1rem 2rem'}}>
                <HomeIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{margin:smallIcon?'0 0.3rem':'0 0.5rem',padding:smallIcon?'0.7rem 0.7rem':'1rem 2rem'}}>
                <FlagIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{margin:smallIcon?'0 0.3rem':'0 0.5rem',padding:smallIcon?'0.7rem 0.7rem':'1rem 2rem'}}>
                <SubscriptionsIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{margin:smallIcon?'0 0.3rem':'0 0.5rem',padding:smallIcon?'0.7rem 0.7rem':'1rem 2rem'}}>
                <StorefrontIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            <IconButton sx={{margin:smallIcon?'0 0.3rem':'0 0.5rem',padding:smallIcon?'0.7rem 0.7rem':'1rem 2rem'}}>
                <SupervisedUserCircleIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
        </Box>
    )
}

export default Menubar
