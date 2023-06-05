import React from 'react'
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import { Typography } from '@mui/material';

type SidebarRowProps = {
    src: string;
    Icon?: React.ElementType;
    title: string;
  };
  

const SidebarRaw: React.FC<SidebarRowProps> = ({ src, Icon, title }) => {
    return (
        <Box >
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <Typography variant="h4">{title}</Typography>
      </Box>
  )
}

export default SidebarRaw