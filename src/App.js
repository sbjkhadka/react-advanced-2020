import React from "react";
import Setup from "./tutorial/1-useState/setup/1-error-example";
// import Final from "./tutorial/1-useState/final/1-error-example";
// import UseStateBasics from "./tutorial/1-useState/setup/2-useState-basics";
// import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
// import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
// import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";
// import BirthdayList from "./projects/BirthdayList";
import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";
import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
import ShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";

function App() {
  return (
    <div className="container">
      {/* <Setup /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}
      {/* <BirthdayList /> */}
      {/* <UseEffectBasics /> */}
      {/* <UseEffectCleanup /> */}
      {/* <UseEffectFetchData /> */}
      <ShowHide />
    </div>
  );
}

export default App;
