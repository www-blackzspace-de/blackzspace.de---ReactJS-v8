import { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from 'file-saver';
import '../Styles/IP.css';



function IP() {

  const [ip, setIP] = useState("");

  
  const handleDownload = () => {
    const file = new Blob([ip], { type: 'text/plain;charset=utf-8' });
    saveAs(file, 'ip.txt');
  };


  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
    
    axios.post('https://blackzspace.de:8081/ip', {ip})
    .then(res => console.log(res))
    .catch(err => console.log(err))
   
    
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <div className="IP">
      <header className="IP-header">
        <center>
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
      </center>

      <button onClick={handleDownload}>
      Download
    </button>
      </header>
    </div>
  );
}

export default IP;