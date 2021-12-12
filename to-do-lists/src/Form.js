import React from "react";
import "./App.css";
import Todo from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksList: [],
      task: "",
      myStyle: {
        // display: "inline-block",
        // position: "relative",
        // left: "50%",
        // transform: "translateX(-50%)"
      },
    };
  }

 showToast=(content) => {
  toast.success(content,{
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "dark",
    autoClose : "5000"
  });
 }
  handleTasks = (event) => {
    this.setState({ task: event.target.value });
  };
  addTask = () => {
    console.log(this.state.tasksList);
    const id = this.state.tasksList.length;
    const name = this.state.task;
    this.state.tasksList.push({id, name , done: false});
    this.setState({ task: "" });
    this.showToast("Add into your list successfully");
  };
  deleteTask=(id)=>{
    console.log("Before Delete",this.state.tasksList);
    const tasksList = this.state.tasksList.filter((task) => task.id !== id);
    if (tasksList === null) {
      this.setState({ tasksList: [] });
    }
    this.setState({tasksList});
    console.log("After Delete",this.state.tasksList);
    this.showToast("Delete your list successfully");
  }
  completeTask=(id)=>{
    this.state.tasksList.forEach(e=>{
      if(e.id===id){
        e.done =true;
      }
      console.log(e);
      this.setState({e});
    })
  }
  render() {
    return (
      <div style={this.state.myStyle}>
        <h3>To do Lists</h3>
        <input
          type="text"
          className="Form-control"
          placeholder="Enter for a new Task"
          value={this.state.task}
          name="task"
          onChange={this.handleTasks}
        />
        <input type="button" value="Submit" onClick={this.addTask} />
        <ul>
          {this.state.tasksList.map((task) => (
            <Todo
              task={task.name}
              done={task.done}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
              id={task.id}
            />
          ))}
        </ul>
        <ToastContainer position="top-right" />
        
      </div>
    );
  }
}
export default Form;
