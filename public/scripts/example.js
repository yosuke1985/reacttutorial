var Counter = React.createClass({
  getInitialState() {
    return {
      //boolean
      count: true
    };
  },

  onClick() {
    if (this.state.count){
      this.setState({count: false});

      console.log(false);
    }else {
      this.setState({count: true});
      console.log(true);
    }
  },
  render() {
    return (
      <div>
        <div>count:{this.state.count}</div>
        <button onClick={this.onClick}>click!</button>
      </div>
    );
  }
});

ReactDOM.render(
<Counter />,
  document.getElementById('content')
);
