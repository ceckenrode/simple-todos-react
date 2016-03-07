//the Task component has a proptype of task which is required
//and its an object. ie, we cant put out an Task component if 
//we have no text inside
Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
});