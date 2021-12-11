import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksList: [],
      task: "",
      myStyle: {
        display: "inline-block",
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)"
      },
    };
  }

  displayTasks(props) {
    return (
      <>
        <h3>
          <button>
            <i className="fa fa-check" style={{ color: "green" }}></i>
          </button>
          <button>
            <i className="fa fa-trash" style={{ color: "red" }}></i>
          </button>
          {props.task}
        </h3>
      </>
    );
  }
  
  handleTasks = (event) => {
    this.setState({ task: event.target.value });
  };
  addTask = () => {
    console.log(this.state.tasksList);
    this.state.tasksList.push(this.state.task);
    this.setState({ task: "" });
  };
  // deleteTask=()=>{
  //   console.log("delete");
  // }
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
            <this.displayTasks task={task} />
          ))}
        </ul>
      </div>
    );
  }
}
export default Form;
