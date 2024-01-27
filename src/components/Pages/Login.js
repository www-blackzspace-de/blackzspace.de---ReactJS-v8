import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from 'axios';
import "../Styles/Login.css";




function Login() {

  const [user, setUsername] = useState('')
  const [password, setPassword] = useState('')

  
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://blackzspace.de:8081/login', {user, password})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const [message, setMessage] = useState("");
  useEffect(() => {
    document.title = "bS | Login 🔑";
    fetch('https://blackzspace.de:8081/login')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);


  
  return (
    
    <div className="Login-header">
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Login
              </Typography>
            </Box>
          </Container>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <div>
      <label htmlFor="username">Username</label>
      <input type="username" placeholder="Enter Username" className="form-control"
      onChange={e => setUsername(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter Password" className="form-control"
      onChange={e => setPassword(e.target.value)}/>
      </div>
      <button className="btn btn-success" type="submit">Login</button>
   
      </form>
        </div>
      
        </div>
  );
}

export default Login;