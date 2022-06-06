//react functional state components using hooks
//useState
//useEffect
//useContext
//useReducer
//useRef

import React, {useEffect, useRef} from "react";

function FunctionalBasedComponent() {
  const inputRef = useRef(null);
  console.log(inputRef);
  useEffect(()=>{
    inputRef.current.focus();
  },[]);
  // const handleFocus =()=>{
  //   inputRef.current.focus();
  // }
  return (
    <>
      <input ref={inputRef} name="name" placeholder="Name" type="text"/>
      {/* <button onClick={handleFocus}>Click</button> */}
    </>
  );
}

export default FunctionalBasedComponent;
