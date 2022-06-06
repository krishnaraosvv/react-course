// import logo from "./logo.svg";
import "./App.css";
// import ClassBasedComponent from "./Components/ClassBasedComponent";
import FunctionalBasedComponent from "./Components/FunctionalBasedComponent";
import { createContext } from "react";

export const Context = createContext("light");
console.log(Context);

function App() {
  return (
    <Context.Provider value='green'>
      <div className="App">
        <FunctionalBasedComponent />
      </div>
    </Context.Provider>
  );
}

export default App;
