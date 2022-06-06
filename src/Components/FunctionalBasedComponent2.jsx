//react functional state components using hooks
//useState
//useEffect
//useContext
//useReducer
//useRef

import React, { useEffect, useState } from "react";

function FunctionalBasedComponent() {
  const [count, setCount] = useState(0); //count initial state set to 0
  const [flag, setFlag] = useState(false);

  console.log(count);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("effect is called only once the page loads");
  }, []); // equal to componentDidMount in class component

  useEffect(() => {
    if (count === 5) {
      setFlag(true);
    }
  }, [count]); // equal to componentDidUpdate in class component

  useEffect(() => {
    return () => {
      console.log("unmounted");
    };
  }); // equal to componentWillUnmount in class component

  return (
    <>
      <button onClick={handleClick}>Click</button>
      counter value is {count}
      {flag && <p>Hello there</p>}
    </>
  );
}

export default FunctionalBasedComponent;
