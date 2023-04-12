import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import OurExperts from "./OurExperts/OurExperts";
import Whyus from "./Whyus/Whyus";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Whyus></Whyus>
      <OurExperts></OurExperts>
      <Box sx={{ p: 5, mb: 2, alignItems: "center" }}>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Developed By SCET Students With{" "}
          <FavoriteIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
