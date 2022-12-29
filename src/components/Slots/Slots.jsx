import "./slots.css";

function Slot({ data, isSpinning, endHandler, propsClass }) {
  return (
    <div className="slot">
      <div className={isSpinning ? propsClass : ""} onAnimationEnd={endHandler}>
        {data.map((item) => {
          return (
            <div key={item.name} className="item">
              <span> {item.emoji} </span>
            </div>
          );
        })}
        {data.map((item) => {
          return (
            <div key={item.name} className="item">
              <span> {item.emoji} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Slots({ slotOne, slotTwo, slotThree, endHandler, isSpinning }) {
  return (
    <div className="slots">
      <div className="indicator left"></div>
      <div className="indicator right"></div>

      <Slot
        data={slotOne}
        isSpinning={isSpinning}
        endHandler={endHandler}
        propsClass="slot-one"
      />

      <Slot
        data={slotTwo}
        isSpinning={isSpinning}
        endHandler={endHandler}
        propsClass="slot-two"
      />

      <Slot
        data={slotThree}
        isSpinning={isSpinning}
        endHandler={endHandler}
        propsClass="slot-three"
      />
    </div>
  );
}

export { Slots };
