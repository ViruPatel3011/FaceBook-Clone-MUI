import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import {Box,IconButton,useMediaQuery } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color:"black",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: "#eaeaea",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header():JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Avatar src="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg" />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // Media Queries for Header start
  const isLargeScreen = useMediaQuery('(min-width:950px)');
  const isIconSize = useMediaQuery('(max-width:1300px )');
  const hideUserName = useMediaQuery('(max-width:1150px )');


  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:"#f9f9f9"}}>
        <Toolbar>
          <IconButton
          
            size="large"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <FacebookRoundedIcon sx={{fontSize:"3rem",color:"#2e81f4"}}/>
          </IconButton>

          <Search sx={{ borderRadius: "50px",backgroundColor:"#eaeaea" }}>
            <SearchIconWrapper  >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
             
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{display: isLargeScreen ? 'flex' : 'none',
}}>
            <IconButton
              sx={{ color: "gray", margin:isIconSize?"0 0.3rem":"0 0.5rem", padding:isIconSize?"0.5 0.5rem":"1rem 2rem"}}
            >
              <HomeIcon sx={{fontSize:"2rem"}}/>
            </IconButton>
            <IconButton
              sx={{ color: "gray",  margin:isIconSize?"0 0.3rem":"0 0.5rem", padding:isIconSize?"0.5 0.5rem":"1rem 2rem" }}
            >
              <FlagIcon sx={{fontSize:"2rem"}}/>
            </IconButton>
            <IconButton
              sx={{ color: "gray",  margin:isIconSize?"0 0.3rem":"0 0.5rem", padding:isIconSize?"0.5 0.5rem":"1rem 2rem" }}
            >
              <SubscriptionsIcon sx={{fontSize:"2rem"}}/>
            </IconButton>
            <IconButton
              sx={{ color: "gray",  margin:isIconSize?"0 0.3rem":"0 0.5rem", padding:isIconSize?"0.5 0.5rem":"1rem 2rem" }}
            >
              <StorefrontIcon sx={{fontSize:"2rem"}}/>
            </IconButton>
            <IconButton
              sx={{ color: "gray",  margin:isIconSize?"0 0.3rem":"0 0.5rem", padding:isIconSize?"0.5 0.5rem":"1rem 2rem" }}
            >
              <SupervisedUserCircleIcon sx={{fontSize:"2rem"}}/>
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton

              sx={{display:hideUserName?"none":"flex"}}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <Avatar src="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg" />
              <small >Viral Patel</small>
            </IconButton>
            <IconButton size="large" edge="end" color="default">
              <AddIcon />
            </IconButton>
            <IconButton size="large" edge="end" color="default">
              <ForumIcon />
            </IconButton>
            <IconButton size="large" edge="end" color="default">
              <NotificationsActiveIcon />
            </IconButton>
            <IconButton size="large" edge="end" color="default">
              <ExpandMoreIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="default"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
