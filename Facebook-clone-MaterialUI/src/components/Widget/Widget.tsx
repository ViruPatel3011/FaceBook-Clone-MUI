import React from 'react'
import {Box,useMediaQuery} from "@mui/material";


const Widget = ():JSX.Element => {
      // Media Queries for Header start
      const hideWidget = useMediaQuery('(max-width:900px )');
  return (
    <Box sx={{width:"23%",boxShadow:"0px 5px 10px -7px rgba(0, 0, 0, 0.75)",height:"100vh",display:hideWidget?'none':'block'}}>Widget</Box>
  )
}

export default Widget