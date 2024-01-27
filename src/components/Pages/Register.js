import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../Styles/Login.css";




function Register() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [registerStatus, setRegisterStatus] = useState('')

  
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://blackzspace.de:8081/register', {username, password, email})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const [message, setMessage] = useState("");
  useEffect(() => {
    document.title = "bS | Register 🔑";
    fetch('https://blackzspace.de:8081/register')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
      console.log(
        "Console > Register!"
      );
      
  }, []);


  
  return (
    
    <div className="Register-header">
      <div className="register">
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
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter Email" className="form-control"
      onChange={e => setEmail(e.target.value)}/>
      </div>
      <button className="btn btn-success" type="submit">Register</button>
   
      </form>
        </div>
        <center><p>{message}</p></center>
        </div>
  );
}

export default Register;