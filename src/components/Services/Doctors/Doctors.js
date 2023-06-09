import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { HashLink } from "react-router-hash-link";
import useDocData from "../../../Hooks/useDocData";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import swal from "sweetalert";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";

const Doctors = () => {
  const doctors = useDocData();
  const swalAlert = () => {
    console.log("swal is clicked");
    return swal("Describe your problem here:", {
      content: "input",
    }).then((value) => {
      swal(
        `Your problem is ${value}, Accounted Our Doctor is Contact you as soon as Possible. Till then be patient.`
      );
    });
  };
  return (
    <div id="doctors">
      {doctors[0].length > 1 ? (
        <>
          <Box
            sx={{
              bgcolor: "#b2a4ff",
              color: "black",
              p: 2,
              mb: 2,
              mt: 6,
              textAlign: "center",
            }}
          >
            <Container maxWidth="xl">
              <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h5">
                Our team always ready to assist you
              </Typography>
              <Grid container spacing={3}>
                {doctors[0]?.map((doctor) => (
                  <Grid
                    key={doctor.doc_id}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    sx={{ mx: "auto" }}
                  >
                    <Card
                      sx={{
                        mx: "auto",
                        boxShadow: 10,
                        maxWidth: 350,
                        maxHeight: 600,
                        paddingTop: 2,
                        transition: "0.5s all ease-in-out",
                        ":hover": {
                          color: "#5555ab",
                          boxShadow: 1,
                        },
                        img: { transition: "0.5s all ease-in-out" },
                        ":hover img": {
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      <CardActionArea
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Avatar
                          alt="doctor image"
                          src={doctor?.doc_img}
                          sx={{
                            width: 256,
                            height: 256,
                            mx: "auto",
                          }}
                        />

                        <CardContent
                          sx={{
                            display: "flex",
                            mx: "auto",
                            my: 2,
                          }}
                        >
                          <Typography
                            gutterBottom
                            sx={{
                              fontWeight: 100,
                              display: "flex",
                              flexDirection: "flex-column",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            variant="p"
                            component="div"
                          >
                            {doctor.specialize}
                          </Typography>
                        </CardContent>
                        <Typography
                          gutterBottom
                          sx={{ fontWeight: 800 }}
                          variant="h6"
                          component="div"
                        >
                          {doctor.name}
                        </Typography>
                      </CardActionArea>
                      <CardActions
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          onClick={swalAlert}
                          sx={{ mt: 2, mb: 1 }}
                          variant="contained"
                          className="CheckButton"
                        >
                          Make an Appointment
                          <AddCircleIcon />
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h4">
                FeedBack
              </Typography>
              <Typography
                sx={{ mt: 2, mb: 2, fontWeight: 400, color: "grey" }}
                variant="h6"
              >
                We value your time and effort to use this website. please give
                us some valuable feedback by clicking{" "}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScD8CtTFtPHx_oyQIzrIzMJ-zaeZFnOhuLH5ySMwBCqxxkmSA/viewform?vc=0&c=0&w=1&flr=0"
                  target="blank"
                >
                  {" "}
                  the link.
                </a>
              </Typography>
              <HashLink smooth to="/home#home" className="text-style">
                {" "}
                <Button
                  variant="contained"
                  startIcon={<HomeIcon />}
                  sx={{ mb: 5, mt: 5 }}
                >
                  Back to Home
                </Button>
              </HashLink>
            </Container>
          </Box>
        </>
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </div>
  );
};

export default Doctors;
