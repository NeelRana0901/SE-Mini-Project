import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HashLink } from "react-router-hash-link";
import useDocData from  "../../About/team.json" ;


const OurExperts = () => {
  return (
    <Box
      sx={{
        bgcolor: "#5555ab",
        color: "primary.main",
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

        
          <Grid container spacing={3}>
            {useDocData?.map((experts) => (
              <Grid
                key={experts.id}
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
                    maxWidth: 345,
                    transition: "0.5s all ease-in-out",
                    ":hover": {
                      color: "#e91e63",
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
                        width: 256,
                        height: 256,
                        mx: "auto",
                      }}
                    />

                    <CardContent sx={{ display: "flex", mx: "auto", my: 2 }}>
                      {/* <Typography gutterBottom variant="h5" component="div">
                        Specialist in {experts}
                      </Typography> */}
                    </CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Dr. {experts.fullName}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        

        {/* <Typography sx={{ mx: 2, p: 2, textAlign: "end" }}>
          <HashLink
            smooth
            to="/doctors#doctors"
            className="text-style"
            color="primary"
          >
            {" "}
            Meet Our Team Members
          </HashLink>
        </Typography> */}
      </Container>
    </Box>
  );
};

export default OurExperts;
