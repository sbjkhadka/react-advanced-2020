import React from "react";
import Setup from "./tutorial/1-useState/setup/1-error-example";
// import Final from "./tutorial/1-useState/final/1-error-example";
import UseStateBasics from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";
import BirthdayList from "./projects/BirthdayList";
function App() {
  return (
    <div className="container">
      {/* <Setup /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}
      <BirthdayList />
    </div>
  );
}

export default App;
