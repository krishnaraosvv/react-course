import React from "react";
import PropExample from "../PropsExample";

const Child = () => {
  return <p>Child Component</p>;
};
function FunctionalBasedComponent() {

    const getValueFromChildComponent=(value)=>{
        console.log(value);
    };
  return (
    <>
      <Child />
      Welcome to Functional based component <br />
      <PropExample getValueFromChildComponent={getValueFromChildComponent} />
    </>
  );
}

export default FunctionalBasedComponent;
