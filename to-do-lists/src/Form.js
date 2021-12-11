import React from "react";
import "./App.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasksList: [] , task: ''};
  }
  displayTasks(props) {
    return <li>{props.task}</li>;
  }
  handleTasks = (event) => {
    this.setState({task: event.target.value});
  }
  addTask = () => {
    console.log(this.state.tasksList);
    this.state.tasksList.push(this.state.task);
    this.setState({task:''});
  };
  render() {
    return <div className="App">
        <h3>To do Lists</h3>     
            <input type="text" className="Form-control" placeholder="Enter for a new Task" value={this.state.task} name="task" onChange={this.handleTasks}/>
            <input type="button" value="Submit" onClick={this.addTask}/>
            <ul>{this.state.tasksList.map((task)=><this.displayTasks task={task}/>)}</ul>
    </div>;
  }
}
export default Form;
