// tutorial1.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
      <h1>Comments</h1>
      <CommentList />
      <CommentForm />
      </div>

    );
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author = "Yosuke Nakayama">Thiiis isss oneee!</Comment>
        <Comment author = "Lina Fang">This is sencond comment</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    )
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
