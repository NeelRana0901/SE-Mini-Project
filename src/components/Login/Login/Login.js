import React from "react";
import { Box, Container, CssBaseline, Grid } from "@mui/material";
import GoogleButton from "react-google-button";
import "./Login.css";
import useAuth from "../../../Hooks/useAuth";
import UserProfile from "./UserProfile/UserProfile";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LOGO from "./LoginPage.jpg";

const Login = () => {
  const { singInUsingGoogle, user, setUser, setError, setIsLoading } =
    useAuth();

  //location is use for privet route
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/profile";

  // const navigateServices=()=>{
  //   let path= "/services2"
  //   navi(path)
  // }

  const handleGoogleSignIn = () => {
    singInUsingGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container id="login" maxWidth="3xl" class="background">
        {user?.email ? (
          <>
            <UserProfile />
          </>
        ) : (
          <>
            {/* if user is logout */}
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                className="loginPage"
                sx={{
                  marginTop: 15,
                  marginBottom: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflowY: "hidden",
                  justifyContent: "center",
                }}
              >
                {/* google btn */}
                <img className="loginImage" src={LOGO} alt="Logo" />
                <Grid item>
                  <GoogleButton
                    className="google-btn"
                    type="dark" // can be light or dark
                    onClick={handleGoogleSignIn}
                  />
                </Grid>
              </Box>
            </Container>
          </>
        )}
      </Container>
    </Box>
  );
};

export default Login;
