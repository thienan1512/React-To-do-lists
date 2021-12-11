import React from "react";
import "./App.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
  }
  takeTask = (event) => {
    this.setState({ task: event.target.value});
    console.log("Task : "+this.state.task);
  };
  render() {
    return <div className="App">
        <h3>To do Lists</h3>
        <form>
            <input type="text" className="Form-control" placeholder="Enter for a new Task" onChange={this.takeTask}/>
        </form>
    </div>;
  }
}
export default Form;
