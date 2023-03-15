import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import About from "../About/About";
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
      <Container className="content-container" maxWidth="xl">
        <About></About>
      </Container>
      <OurExperts></OurExperts>
      <Box sx={{ p: 5, mb: 2, alignItems: "center" }}>
        <Typography sx={{ textAlign: "center" }} variant="h5">
          Developed By SECT Students With{" "}
          <FavoriteIcon sx={{ color: "primary.main", mr: 1, my: 0.5 }} />
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
