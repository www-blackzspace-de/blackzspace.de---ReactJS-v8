import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

import TutorialsList from "./Lists/TutorialsList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import '../Styles/Tutorials.css';



const Tutorials = () => {

  const [tutorials, setTutorials] = useState([
    { title: '30.01.24 - How to deploy Node.JS Container', body: 'How to deploy a docker container from node.js-project source!', url: 'https://github.com/blackzspace-de-Tutorials/How-To-Dockerize-NodeJS-Backend',  author: 'BlackLeakz', id: 1 },
    { title: '30.01.24 - BPI-M2-Berry GPIO Control OLED SSD1306', body: 'How to control oled ssd1306 display on Banana Pi', url: 'https://github.com/blackzspace-de-Tutorials/How-To-Control-GPIO-BPI-M2-Berry', author: 'BlackLeakz', id: 1 },
    { title: '30.01.24 - blackzspace-OS', body: 'How to install applications used by blackzspace-OS', url: 'https://github.com/blackzspace-de-Tutorials/How-To-Install-BlackzSpace-OS', author: 'BlackLeakz', id: 1 },

  ])

  useEffect(() => {
    document.title = "bS | Tutorials";
    console.log("Console > Tutorials!")
  }, []);


  return (
    <div>
      <header className="Tutorials-Header">
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Tutorials
              </Typography>
            </Box>
          </Container>
      </header>

      <div className="Tutorials-body">
      <TutorialsList tutorials={tutorials} title="All Tutorials" />
      </div>
    </div>
  );
};

export default Tutorials;








