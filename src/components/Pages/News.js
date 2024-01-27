

import { useState, useEffect } from "react";

import NewsList from "./Lists/NewsList";
import "../Styles/News.css";





const News = () => {
    
    const [news, setNews] = useState([
      { title: '22.21.24 - blackzspace.de', body: 'Minceraft-Server ist im Aufbau!', author: 'BlackLeakz', id: 1 },
      { title: '31.08.23 - blackzspace.de', body: 'Hier entsteht eine Internetpräsenz!', author: 'BlackLeakz', id: 1 },
      { title: '31.08.23 - board.blackzspace.de', body: 'Board is enabled and is waiting for content-creator!', author: 'BlackLeakz', id: 2 },
      { title: '31.08.23 - BlackLeakz-Bot', body: 'blackleakz-bot | Written in node.js by using the module "discord.js" is in dev mode! You want to be a part ?! Join the deloper-team by contacing me or another member on discord or board!', author: 'BlackLeakz', id: 3 }
    ])

    useEffect(() => {
      document.title = "bS | News";
  
      console.log(
        "Console > News!"
      );
  
    }, []);


  
    return (
      <div className="news">
        <div className="content">
        <NewsList news={news} title="All News" />
        </div>
      </div>
    );
  }
   
  export default News;