import React from "react";
import Form from "./Form";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <tr>
            <td>
              <Form title="Go Shopping" />
            </td>
            <td>
              <Form title="School tasks" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
export default App;
