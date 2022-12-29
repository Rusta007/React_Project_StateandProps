import React from "react";

const ChildCompo = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <h2> {props.surname}</h2>
      <h4>{props.color}</h4>
    </>
  );
};
export default ChildCompo;
