import React, { useState } from "react";


function GuessTheNumber() {
  const generateRandom = () =>Math.floor(Math.random() * 100) + 1;
  
  const [searchText, setSearchText] = useState("");
  const [randomNumber, setRandomNumber] = useState(generateRandom());

  const [attempts, setAttempts] = useState(0);

  const [message, setMessage] = useState("");
  // Function to handle guess checking
  const handleGuess = () => {
    const num = parseInt(searchText);
    if (isNaN(num) || num < 1 || num > 100)
    {
      setMessage("Please enter a number between 1 and 100")
      return;
    }
    
    setAttempts(attempts + 1);
    if (num < randomNumber) {
      setMessage("Too Low! Try Again ")
    }
    else if(num> randomNumber){
      setMessage("Too High! Try Again")
    }
    else {
      setMessage(`Congratulations! You Guessed the number in ${attempts+1} attempts`);
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setMessage("");
    setSearchText("");
    setRandomNumber(generateRandom());
    setAttempts(0);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>

      <input
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        id="guess-input" value={searchText}
        onChange = {(e)=> setSearchText(e.target.value)}
      />

      <div style = {{margin:'20px 0', display:"flex", alignItems:"Center", justifyContent:"space-around", width:"300px"}}>
        <button onClick = {handleGuess}>Check Guess</button>
        <button onClick = {resetGame}>Reset Game</button>
      </div>
      <p>{message}</p>
    </div>
    
  );
  
}

export default GuessTheNumber;
