const NewsList = ({ news, body, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="News-list">
        <h2>{ title }</h2>
        {news.map(page => (
          <div className="News-preview" key={page.id} >
            <h2>{ page.title }</h2>
            <p className="News-body">{ page.body }</p>
            <p className="News-author">Written by { page.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default NewsList;