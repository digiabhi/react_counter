import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;
  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1);
  };
  const removeValue = () => {
    if (counter < 1) {
      return;
    }
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Using React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
