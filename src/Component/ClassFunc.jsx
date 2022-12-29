import React from "react";
import ChildCompo from "./ChildCompo";

class ClassFunc extends React.Component {
  state = { color: "red" };

  render() {
    let name = "Prajapati";
    return (
      <>
        {/* <h1>{this.state.color}</h1> */}
        <ChildCompo surname={name} color={this.state.color} />
      </>
    );
  }
}
export default ClassFunc;
