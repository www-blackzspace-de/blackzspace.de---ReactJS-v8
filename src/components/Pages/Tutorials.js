import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import '../Styles/Tutorials.css';



const Tutorials = () => {

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

      <div className="body">
      <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="p3"
                component="p1"
                gutterBottom
              >
                <li><a href="https://board.blackzspace.de/">How to Build a CASTLE </a></li>
              </Typography>
            </Box>
          </Container>
      </div>
    </div>
  );
};

export default Tutorials;
