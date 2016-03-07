//the Task component has a proptype of task which is required
//and its an object. ie, we cant put out an Task component if 
//we have no text inside
Task = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  toggleChecked() {
    //set the check property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: {checked: ! this.props.task.checked}
    });
  },

  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  },

  render() {
    //Give tasks a different className when they are checked off,
    //so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? "checked" : "";

    return (
      <li className = {taskClassName}>
        <button className="delete" onClick={this.deleteThisTask}>
          &times;
        </button>

        <input type="checkbox" readOnly={true} checked={this.props.task.checked}
        onClick={this.toggleChecked} />

        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
});