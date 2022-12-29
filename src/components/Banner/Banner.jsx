import { LOST, START, WON } from "../../constants";
import "./banner.css";

function Banner({ gameState }) {
  return (
    <div className="banner">
      <span className={gameState}>
        {gameState === START && "Please Spin the slot to win prices"}
        {gameState === LOST && "Sorry you have lost, please try again"}
        {gameState === WON && "Hurray, you have won the round"}
      </span>
    </div>
  );
}

export { Banner };
