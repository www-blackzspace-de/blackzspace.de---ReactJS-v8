const TutorialsList = ({ tutorials, body, url, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="Tutorials-list">
        <h2>{ title }</h2>
        {tutorials.map(page => (
          <div className="Tutorials-preview" key={page.id} >
            <h2>{ page.title }</h2>
            <p className="Tutorials-body">{ page.body }</p>
            <li className="Tutorials-url"><a href={page.url} target="_blank" rel="noreferrer">Link</a></li>
            <p className="Tutorials-author">Written by { page.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default TutorialsList;