const MinecraftList = ({ news, body, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="minecraft-list">
        <h2>{ title }</h2>
        {news.map(page => (
          <div className="minecraft-preview" key={page.id} >
            <h2>{ page.title }</h2>
            <p className="minecraft-body">{ page.body }</p>
            <p className="minecraft-author">Written by { page.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default MinecraftList;