import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Team from ".//team.json";

import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  console.log(Team);
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          Team Member
        </Typography>
        <div className="flex w-full space-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-[#FF5A5F] scrollbar-track-gray-500/40 items-center p-6 snap-x snap-mandatory">
          {Team &&
            Team.map((item, index) => {
              return (
                <li key={index} className="list-none">
                  <div className="flex snap-center flex-col items-center border bg-[#292929]/10 dark:bg-[#292929]/70 rounded-lg p-10">
                    <div className="items-center">
                      <img
                        alt="Team Members"
                        src={item.imgLink}
                        height={100}
                        width={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="p-3 items-center">
                      <p className="text-gray-900 text-center dark:text-gray-200 text-sm font-bold">
                        {item.fullName}
                      </p>
                      <div className="bg-transparent flex">
                        <div className="flex space-x-3">
                          <FaGithub className="text-gray-400 hover:text-black dark:hover:text-black dark:text-gray-400" />
                          <FaLinkedin className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-700 dark:text-gray-400" />
                          <FaInstagram className="text-gray-400 hover:text-pink-600 dark:hover:text-pink-600 dark:text-gray-400" />
                          <FaFacebook className="text-gray-400 hover:text-blue-700 dark:hover:text-blue-700 dark:text-gray-400" />
                          <FaTwitter className="text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-600 dark:text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
        </div>
      </Container>
    </Box>
  );
};

export default About;
