

import { useState, useEffect } from "react";






const News = () => {
    
    const [urls, setUrls] = useState([
      { title: '', url: 'https://github.com/blackzspace-de-Tutorials/How-To-Dockerize-NodeJS-Backend', author: 'BlackLeakz', id: 1 },
      { title: '', url: 'https://github.com/blackzspace-de-Tutorials/How-To-Control-GPIO-BPI-M2-Berry', author: 'BlackLeakz', id: 1 },
      { title: '', url: '', author: 'BlackLeakz', id: 1 },
     ])

    useEffect(() => {
      document.title = "bS | Tutorials Repositorys";
  
      console.log(
        "Console > Tutorials Repositorys!"
      );
  
    }, []);


  
    return (
      <div className="news">
        <div className="content">
        </div>
      </div>
    );
  }
   
  export default News;