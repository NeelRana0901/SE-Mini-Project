import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useData from "../../../Hooks/useData";
import "./Whyus.css";

const Whyus = () => {
  const [ourServices, setOurServices] = useState([]);
  const mainData = useData();
  let services = mainData[0];

  // handle undifined problem in mapping data
  useEffect(() => {
    if (services.length > 1) {
      const serv = services?.slice(0, 3);
      setOurServices(serv);
    } else {
      <LinearProgress color="secondary" />;
    }
  }, [services]);

  return (
    <Box
      sx={{
        bgcolor: "#b2a4ff",
        color: "#black",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Why Choose Our Medical
        </Typography>
        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          Breakthrough in Comprehensive, Flexible Care Delivery Models
        </Typography>
        {services?.length > 1 && (
          <Grid container spacing={3}>
            {ourServices?.map((service) => (
              <Grid
                key={service.id}
                className={service.class}
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
                }}
              >
                <Card
                  sx={{
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    mb: 2,
                    ":hover": {
                      boxShadow: 10,
                      color: "#5555ab",
                    },
                    img: { transition: "0.5s all ease-in-out" },
                    ":hover img": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="240"
                      image={service?.service_img}
                      alt="card image of service"
                    />
                    <CardContent sx={{ display: "flex", mx: "auto", my: 2 }}>
                      <Avatar
                        alt="service icon"
                        src={service?.icon}
                        sx={{
                          width: 40,
                          height: 40,
                          mx: "auto",
                        }}
                      />
                      <Typography gutterBottom variant="h5" component="div">
                        Consult for {service.treatment}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Typography
                      sx={{
                        mx: 2,
                        p: 2,
                        textAlign: "end",
                        ":hover": {
                          color: "#5555ab",
                        },
                      }}
                    >
                      <Link
                        className="text-style"
                        to="/services"
                        color="#5555ab"
                      >
                        See More Details...
                      </Link>
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/services#services"
            className="text-style"
            color="primary"
          >
            See All services
          </HashLink>
        </Typography>
      </Container>
    </Box>
  );
};

export default Whyus;
