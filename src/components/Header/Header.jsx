import "./header.css";
import { INITIAL_CREDITS } from "../../constants";

function Header({ credits, setCredits }) {
  const addCreditsHandler = () => setCredits(INITIAL_CREDITS);

  return (
    <div className="header">
      {credits <= 0 && (
        <button onClick={addCreditsHandler} className="credits-btn">
          Add Money
        </button>
      )}
      <span className="credits"> {credits} </span>
    </div>
  );
}

export { Header };
