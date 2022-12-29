import React from "react";
import ChildCompo from "./ChildCompo";
import ClassFunc from "./ClassFunc";

const ParentCompo = () => {
  let name = "Rusta";
  let surname = "Prajapati";
  return (
    <>
      <h1>HelloWorld</h1>
      <ChildCompo name={name} />
      <ClassFunc surname={surname} />
    </>
  );
};
export default ParentCompo;
