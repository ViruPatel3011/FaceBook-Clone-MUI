import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Box from "@mui/material/Box";
import Widget from "../../components/Widget/Widget";

const Home = ():JSX.Element => {
  return (
    <React.Fragment>
      <div className="header">
        <Header />
      </div>
      <Box sx={{display:"flex"}}>
        <Sidebar />
        <Feed />
        <Widget/>
      </Box>
    </React.Fragment>
  );
};

export default Home;
