//Creating our App Component
//it has a getTasks funciton which returns an array of objects
//a renderTasks function which runs getTasks and maps
//each value to a single Task component which has a 
//key of key and a task prop of the task object
App = React.createClass({
  getTasks() {
    return [
    { _id: 1, text: 'This is task 1' },
    { _id: 2, text: 'This is task 2' },
    { _id: 3, text: 'This is task 3' }
    ];
  },

  renderTasks() {
    return this.getTasks().map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },
//when we render we render this html, and then call
//renderTasks which takes the array of objects and returns
//each object inside of a task component
  render() {
    return (
      <div className='container'>
        <header>
          <h1>Todo List</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  } 
});