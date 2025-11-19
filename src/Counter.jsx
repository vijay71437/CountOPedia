import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);
  function handleIncrement() {
    setCount(count++);
  }
  function handleDecrement() {
    setCount(count--);
  }
  return (
    <div className="row text-white container">
      Counter: {count}
      <button className="btn btn-success m-2" onClick={handleIncrement}>
        +1
      </button>
      <button className="btn btn-danger m-2" onClick={handleDecrement}>
        -1
      </button>
    </div>
  );
}

export default Counter;
