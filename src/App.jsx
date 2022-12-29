import { useEffect, useState } from "react";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Slots } from "./components/Slots/Slots";
import { INITIAL_CREDITS, LOST, SLOT_ITEMS, START, WON } from "./constants";
import { shuffle } from "./utils";
import "./App.css";

function App() {
  const [credits, setCredits] = useState(INITIAL_CREDITS);
  const [gameState, setGameState] = useState(START);
  const [slotOne, setSlotOne] = useState(SLOT_ITEMS);
  const [slotTwo, setSlotTwo] = useState(SLOT_ITEMS);
  const [slotThree, setSlotThree] = useState(SLOT_ITEMS);
  const [isSpinning, setIsSpinning] = useState(false);

  const spinHandler = () => {
    setCredits((prev) => prev - 1000);
    setIsSpinning(true);
  };

  const endHandler = () => {
    setSlotOne((prev) => shuffle(prev));
    setSlotTwo((prev) => shuffle(prev));
    setSlotThree((prev) => shuffle(prev));
    setIsSpinning(false);
  };

  useEffect(() => {
    const middleIndex = parseInt(slotOne.length / 2) - 1;

    if (
      gameState === START &&
      slotOne[0] === slotTwo[0] &&
      slotOne[0] === slotThree[0]
    ) {
      setGameState(START);
    } else if (
      slotOne[middleIndex].name === slotTwo[middleIndex].name &&
      slotOne[middleIndex].name === slotThree[middleIndex].name
    ) {
      setGameState(WON);
    } else {
      setGameState(LOST);
    }
  }, [slotOne, slotTwo, slotThree]);

  return (
    <div className="App">
      <h2> Slot Machine </h2>
      <Header credits={credits} setCredits={setCredits} />
      <Banner gameState={gameState} />
      <Slots
        slotOne={slotOne}
        slotTwo={slotTwo}
        slotThree={slotThree}
        endHandler={endHandler}
        isSpinning={isSpinning}
      />
      <Footer
        credits={credits}
        clickHandler={spinHandler}
        isSpinning={isSpinning}
      />
    </div>
  );
}

export default App;
