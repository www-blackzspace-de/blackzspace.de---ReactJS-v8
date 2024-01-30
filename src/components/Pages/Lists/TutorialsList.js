const TutorialsList = ({ tutorials, body, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(blogs);
  
    return (
      <div className="tutorials-list">
        <h2>{ title }</h2>
        {tutorials.map(page => (
          <div className="tutorials-preview" key={page.id} >
            <h2>{ page.title }</h2>
            <p className="tutorials-body">{ page.body }</p>
            <p className="tutorials-author">Written by { page.author }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default TutorialsList;