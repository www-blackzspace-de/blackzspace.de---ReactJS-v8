
import React, { useEffect } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Downloads.css";


function Downloads() {
  useEffect(() => {

    document.title = "bS | Downloads";

    console.log(
      "Console > Downloads!"
    );
  }, []);

  return (
    <div className="Downloads">
      <header className="Downloads-header">
        <div className="head">
          <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Downloads Section
              </Typography>
            </Box>
          </Container>

          <div className="body">
            <center>
              <table class="tg">
                <thead>
                  <tr>
                    <th class="tg-baqh">Name</th>
                    <th class="tg-baqh">Description</th>
                    <th class="tg-baqh">Link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="tg-baqh">VSCode</td>
                    <td class="tg-baqh">Integrated Desktop Enviroment</td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://code.visualstudio.com/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-baqh">Python</td>
                    <td class="tg-baqh">Python Interpreter</td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://www.python.org/downloads/"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-baqh">NodeJS</td>
                    <td class="tg-baqh">Node.js - Runtime Enviroment</td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://nodejs.org/de/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-baqh">QT</td>
                    <td class="tg-baqh">
                      QT-Designer/Creator Framework for building GUI's
                    </td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://www.qt.io/download"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-baqh">Arduino.cc</td>
                    <td class="tg-baqh">Microcontroller IDE </td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://www.arduino.cc/en/software"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="tg-baqh">BlackLeakz Installer</td>
                    <td class="tg-baqh">
                      Offical Development Enviroment Installer (bS)
                    </td>
                    <td class="tg-baqh">
                      <div>
                        <center>
                          <Button
                            class="button"
                            variant="contained"
                            href="https://github.com/blackleakz/blackleakz_installer"
                            target="_blank" 
                            rel="noreferrer"
                          >
                            Download
                          </Button>
                        </center>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Downloads;
