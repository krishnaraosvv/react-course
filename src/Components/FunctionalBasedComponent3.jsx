//react functional state components using hooks
//useState
//useEffect
//useContext
//useReducer
//useRef

import React, {useContext} from "react";
import {Context} from '../App';

function FunctionalBasedComponent() {
  const getValueFromContext = useContext(Context);
  console.log(getValueFromContext);
  return (
    <>
      <button style={{backgroundColor: getValueFromContext}}>Click</button>
    </>
  );
}

export default FunctionalBasedComponent;
