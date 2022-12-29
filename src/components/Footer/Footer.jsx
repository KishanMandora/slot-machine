import "./footer.css";

function Footer({ credits, clickHandler, isSpinning }) {
  return (
    <div className="footer">
      <div>
        <span> Only {credits / 1000} spins left</span>

        <button
          onClick={clickHandler}
          disabled={credits <= 0 || isSpinning ? true : false}
          className="spin-btn"
        >
          <div className="spin-conatiner">Spin</div>
        </button>
      </div>
    </div>
  );
}

export { Footer };
