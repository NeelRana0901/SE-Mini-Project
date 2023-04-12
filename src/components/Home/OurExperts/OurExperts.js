import {
  Avatar,
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useDocData from "./team.json";

const OurExperts = () => {
  return (
    <Box
      sx={{
        bgcolor: "#b2a4ff",
        color: "primary.heading",
        p: 2,
        mb: 2,
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography sx={{ mt: 2, mb: 2, fontWeight: 600 }} variant="h6">
          Meet Our Expert Team
        </Typography>

        <Typography sx={{ mb: 8, fontWeight: 600 }} variant="h5">
          We are committed to ensure you the best service
        </Typography>

        <Grid container spacing={1}>
          {useDocData?.map((experts) => (
            <Grid
              key={experts.id}
              item
              xs={9}
              sm={5}
              md={4}
              lg={2}
              sx={{ mx: "auto" }}
            >
              <Card
                sx={{
                  mx: "auto",
                  boxShadow: 5,
                  maxWidth: 290,
                  transition: "0.5s all ease-in-out",
                  ":hover": {
                    color: "#6c4296",
                    boxShadow: 1,
                  },
                  img: { transition: "0.5s all ease-in-out" },
                  ":hover img": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <CardActionArea>
                  <Avatar
                    alt="doctor image"
                    src={experts?.imgLink}
                    sx={{
                      width: 180,
                      height: 180,
                      top: 10,
                      mx: "auto",
                    }}
                  />

                  <Typography
                    sx={{
                      padding: 2,
                    }}
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {experts.fullName}
                  </Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurExperts;
