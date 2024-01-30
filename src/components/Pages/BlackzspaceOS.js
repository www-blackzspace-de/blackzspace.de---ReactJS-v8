
import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/BlackzspaceOS.css";


function BlackzspaceOS() {
  useEffect(() => {
    document.title = "bS | blackzspace.de - OS";

    console.log(
      "Console > blackzspace.de - OS"
    );
  }, []);

  return (
    <div className="BlackzspaceOS">
      <header className="BlackzspaceOS-header">
        
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h5"
                component="h1"
                gutterBottom
              >
                blackzspace.de - OS
              </Typography>
            </Box>
          </Container>




          

            
      </header>
    </div>
  );
}

export default BlackzspaceOS;
