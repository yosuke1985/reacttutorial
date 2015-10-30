var data = [
  {author: "pete hunt", text: "this is one comment"},
  {author: "Jordan Walke", text: "this is twoa comment"}

];

var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={this.props.data}/>
      <CommentForm />
      </div>

    );}
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes =
    this.props.data.map(
      function(comment){
      return(
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return(
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
})

var Comment = React.createClass({
  render: function(){
    return(
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="commentForm">
      Hello from commentform
      </div>
    );
  }

})

ReactDOM.render(
<CommentBox data ={data}/>,
  document.getElementById('content')
);
