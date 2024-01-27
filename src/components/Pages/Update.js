import React, { useState, useEffect } from "react";
import "../Styles/Update.css";

function Update() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  useEffect(() => {
    document.title = "bS | Update";
    console.log("Console > Update!")
  }, []);

  return (
    <div className="Update">
      <h1>{message}</h1>
    </div>
  );
}

export default Update;