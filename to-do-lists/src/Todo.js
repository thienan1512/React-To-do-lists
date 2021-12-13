import React from "react";
class Todo extends React.Component {
  render(props) {
    let header = "";
    if (!this.props.done) {
      header = (
        <i
          className="fa fa-check fa-2x"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => this.props.completeTask(this.props.id)}
        ></i>
      );
    }
    return (
      <div>
        {/* gọi hàm deleteTask bên Form.js = props (như biến parameters) */}
        {header}
        &nbsp;&nbsp;
        <i
          className="fa fa-trash fa-2x"
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => this.props.deleteTask(this.props.id)}
        ></i>
        &nbsp;&nbsp;
        <span className={this.props.done ? "done" : ""}>{this.props.task}</span>
        <br />
      </div>
    );
  }
}
export default Todo;
