import { useEffect, useState } from "react";
import attackImg from "./images/attack.png";
import defenddkImg from "./images/defend.png";
function Counter() {
  const [gameState, setGameState] = useState({
    count: 0,
    gameStatus: "",
  });

  function handleIncrement() {
    const newValue = gameState.count + 1;
    const status =
      newValue >= 5 ? "You Won!" : newValue <= -5 ? "You Lost!" : "";
    setGameState({ count: newValue, gameStatus: status });
  }
  function handleDecrement() {
    const newValue = gameState.count - 1;
    const status =
      newValue <= -5 ? "You Lost!" : newValue >= 5 ? "You Won!" : "";
    setGameState({ count: newValue, gameStatus: status });
  }

  function handleRandomPlay() {
    const playMode = Math.round(Math.random());
    if (playMode == 0) {
      handleIncrement();
    } else {
      handleDecrement();
    }
  }
  function handleReset() {
    setGameState({ count: 0, gameStatus: "" });

    // setGameState((prev) => ({
    //   ...prev,
    //   gameStatus: "",
    // }));
  }
  return (
    <div className="container">
      <div className="row text-white text-center">
        <h1>Game Score: {gameState.count} </h1>
        <p>You win at +5 points and lose at -5 points!</p>
        {gameState.gameStatus.length > 0 && (
          <h3>Game Status:{gameState.gameStatus}</h3>
        )}

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attackImg}
            alt=""
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            onClick={handleIncrement}
          />
        </div>

        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={defenddkImg}
            alt=""
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            onClick={handleDecrement}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4"></div>
        <button
          className="btn btn-success m-2 w-100"
          onClick={handleRandomPlay}
        >
          Random Play
        </button>
        <button className="btn btn-danger m-2 w-100" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
