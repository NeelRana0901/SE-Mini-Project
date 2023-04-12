import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Banner.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  function Item(props) {
    return (
      <Paper>
        <div className="banner-container">
          <img src={props.item.img} alt="" />
          <div className="banner-text tracking-in-expand">
            <Typography component="h4" variant="h5">
              {props.item.name}
            </Typography>
            <Typography component="p">{props.item.description}</Typography>

            <HashLink
              smooth
              to="/appointment#appointment"
              className="text-style"
            >
              <Button
                sx={{ mt: 2 }}
                variant="contained"
                className="CheckButton"
              >
                Make an Appointment
                <AddCircleIcon />
              </Button>
            </HashLink>
          </div>
        </div>
      </Paper>
    );
  }
  const items = [
    {
      name: "You are just one click away from your healthy life",
      description: "Probably the most random thing you have ever seen!",
      img: "https://images.unsplash.com/photo-1625134673337-519d4d10b313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1538&q=80",
    },
    {
      name: "24/7 Support",
      description: "24/7 Support",
      img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <div>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
