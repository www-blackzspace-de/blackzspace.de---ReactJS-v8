import React, { useEffect, } from "react";


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Contact.css";



function Contact() {
  useEffect(() => {
    document.title = "bS | Contact";

    console.log(
      "Console > Contact!"
    );

  }, []);


    return (
    <div class="head">
      <header className="Contact-header">

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Contact
            </Typography>
          </Box>
        </Container>

        <center>
          <p>Contact me over Discord:</p>
        </center>

        <div>

        <iframe 
        title="discord"
        class="discord"
        src="https://discord.com/widget?id=1201563586280034314&theme=dark" 
        width="350" 
        height="500" 
        allowtransparency="true" 
        frameborder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
        </iframe>
        
        </div>
      </header>
      <header className="Contact-body">
        <div className="body">
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="p1" component="p1" gutterBottom>
              Contact me over our board!
              <li><a href="/https://board.blackspace.de/">Board</a></li>
            </Typography>
          </Box>
        </Container>
 
        
    

        </div>
      </header>
    </div>
  );
}

export default Contact;
