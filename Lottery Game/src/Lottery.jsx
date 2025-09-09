import { useState } from "react";  
import { genNum, sum } from "./helper"; 
import Ticket from "./Ticket";
import "./lot.css";
import Button from "./button";

function Lottery({no=3,winningSum}) {
  const [numbers, setNumbers] = useState(genNum(no));

  function handleClick() {
    setNumbers(genNum(no));  
  }

  let isWin = winningSum(numbers);

  return (
    <div className="lot">
      <h1>Lottery Game!!!</h1>
        <Ticket num={numbers}/>
        <Button action={handleClick}/>
      {isWin && <h2>Congratulations, You Won!!!</h2>}
    </div>
  );
}

export default Lottery;
