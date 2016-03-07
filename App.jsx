//Creating our App Component
//it has a getTasks funciton which returns an array of objects
//a renderTasks function which runs getTasks and maps
//each value to a single Task component which has a 
//key of key and a task prop of the task object
App = React.createClass({

  //this mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  //Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      tasks: Tasks.find({}).fetch()
    }
  }, 

  renderTasks() {
    return this.data.tasks.map((task) => {
      return <Task key={task._id} task={task} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();

    //find the text field via the React ref
    var text = React.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    React.findDOMNode(this.refs.textInput).value = "";
  },
//when we render we render this html, and then call
//renderTasks which takes the array of objects and returns
//each object inside of a task component
  render() {
    return (
      <div className='container'>
        <header>
          <h1>Todo List</h1>

          <form className="new-task" onSubmit={this.handleSubmit} >
            <input type="text" ref="textInput" placeholder="Type to add new tasks" />
          </form>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  } 
});