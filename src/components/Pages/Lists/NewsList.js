const NewsList = ({ news, body, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="news-list">
        <h2>{ title }</h2>
        {news.map(page => (
          <div className="news-preview" key={page.id} >
            <h2>{ page.title }</h2>
            <p className="news-body">{ page.body }</p>
            <p className="news-author">Written by { page.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default NewsList;