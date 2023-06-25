import React from "react";
import CellBox from "./CellBox";
import styled from "styled-components";


// for main title
const StyledTitle = styled.h1`
    text-align: center;
    margin: 0;
    font-size: 45px;
`;

// second line
const StyledTitle2 = styled.h1`
    color: rgb(51, 153, 204);
    text-align: center;
    margin: 0;
    font-size: 45px;
`;

// draw pencil sentence
const StyledDrawSentence = styled.h1`
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 0;
    font-size: 24px;
`;

// draw pencil sentence
const StyledPlayersTurnSentence = styled.h1`
    color: rgb(255, 255, 255);
    text-align: center;
    margin: 0;
    font-size: 24px;
`;


const StyledStatus = styled.div`
    text-align: center;
`;

const StyledCellBoxGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledCellBoxGridRow = styled.div`
    display: flex;
`;

// styling the two buttons below grid

// // actually could add a button container to move them together
// const ClearAndPlayAgainButtonContainer = styled.div`
//     margin: 20px;
//     padding: 20px;
//     align-items: center;

const StyledClearButton = styled.button`
    margin: 10px;
    cursor: pointer;
    font-size: 19px;
    border-radius: 10px;

:hover {
    // red to warn that they're about to clear the game
    background-color: rgb(248, 58, 49);

}
`;

const StyledPlayAgainButton = styled.button`
    margin: 10px;
    cursor: pointer;
    font-size: 19px;
    border-radius: 10px;

:hover {
    background-color: rgb(51, 153, 204);

}

`;

function CellBoxGrid({
    cellBoxes,
    setCellBoxes,
    xPlayerIsNext,
    setXPlayerIsNext,
}) 

{
    function handleClick(index) {
    if (cellBoxes[index] || figureOutWinner(cellBoxes)) {
        // if one of the cellBox is already filled or if O or X wins
        return;
    }
    const newCellBoxes = [...cellBoxes]; // creates a copy of the squares array
    // I'm using the spread operator to make a copy of the original array

    newCellBoxes[index] = xPlayerIsNext ? "X" : "O";
    // updates the value of the clicked array to either X or O
    setCellBoxes(newCellBoxes);
    // updates the cellBoxes state with the new array
    setXPlayerIsNext(!xPlayerIsNext);
    // toggles to the current player as if it isn't X player it'll expect O player

    }

    function fillCellBox(index) {
    return <CellBox value={cellBoxes[index]} onClick={() => handleClick(index)} />;
    // fill up a CellBox component with cellBoxValue and onClick prop

    }

   // game logic notes:

    // index - 0, 1, 2, 3, 4, 5, 6, 7, 8

    // HOW CAN SOMEONE WIN?
    // a) if there are 3 rows in a row
    // b) if there are 3 columns in a row
    // c) if diagonally there are 3 in a row
    // has to be either XXX or OOO

    // SHOWING THE WINNER
    // show either X or O depending on what's filled

    // this needs to work for both the X player and O player
    // Return the winner ('X' or 'O') or null if no winner

    function figureOutWinner(cellBoxes) {
    const winningLines = [
                // left to right possible wins
                [0, 1, 2], 
                [3, 4, 5], 
                [6, 7, 8], 
                // left to right reversed possible wins (right to left)
                [2, 1, 0],
                [5, 4, 3],
                [8, 7, 6],
    
                // top to bottom possible wins
                [0, 3, 6], 
                [1, 4, 7], 
                [2, 5, 8], 
                // top to bottom reversed possible wins (bottom to top)
                [6, 3, 0],
                [7, 4, 1],
                [8, 5, 2],
    
    
                // diagonal possible wins
                [0, 4, 8], 
                [2, 4, 6],  
                // diagonal reversed possible wins
                [8, 4, 0], // reversed diagonally
                [6, 4, 2] // reversed diagonally
            ];

    // iterates over the winningLines array using map
    for (const line of winningLines) {
        const [a, b, c] = line;
        if (cellBoxes[a] && cellBoxes[a] === cellBoxes[b] && cellBoxes[a] === cellBoxes[c]) {
        return cellBoxes[a];
        // return the winner, either X or O

    }
    }

    return null;
    // if no one wins nout returned

    }

  // draw
    function checkDraw() {
    return cellBoxes.every((cell) => cell !== ""); //  function goes through every element in the cellBoxes array to check it's not an empty string. If one of the boxes (buttons kinda) is empty it means that it can't be draw, it's true for all elements, it means that all cells in the game grid have got something inside them, and the function returns true, meaning it's a draw. It returns false otherwise meaning it's not a draw
  }

const winner = figureOutWinner(cellBoxes); // checking if there's a winner by looking at current state of cellBoxes
const status = winner
    ? <StyledPlayersTurnSentence>Congratulations team {winner}! Player {winner} is the winner :)</StyledPlayersTurnSentence> // decides on what player wins and what message should be shown, depending on who wins
    : checkDraw() // draw check added
    ? <StyledDrawSentence>Grab a pencil... it's a draw! ✏️</StyledDrawSentence> 
    : <StyledPlayersTurnSentence>Next player: {xPlayerIsNext ? "X" : "O"}</StyledPlayersTurnSentence>;

  return (
    <>
    <div>
      <StyledTitle>Tic Tac Toe Game</StyledTitle>
      <StyledTitle2>🅾 or 🆇❓</StyledTitle2>
      
      {/* status determined here */}
      <StyledStatus>{status}</StyledStatus>
      <StyledCellBoxGridContainer>
        <StyledCellBoxGridRow>
        {/* first row of 3 */}
          {fillCellBox(0)}
          {fillCellBox(1)}
          {fillCellBox(2)}
        </StyledCellBoxGridRow>
        {/* second row of 3 */}
        <StyledCellBoxGridRow>
          {fillCellBox(3)}
          {fillCellBox(4)}
          {fillCellBox(5)}
        </StyledCellBoxGridRow>
        {/* third row of 3 */}
        <StyledCellBoxGridRow>
          {fillCellBox(6)}
          {fillCellBox(7)}
          {fillCellBox(8)}
        </StyledCellBoxGridRow>
      </StyledCellBoxGridContainer>
      {/* starts game again by emptying all the button cell boxes to 9 mpty strings in []*/}
      <StyledClearButton onClick={() => setCellBoxes(Array(9).fill(""))}>
        Clear Game
      </StyledClearButton>
      <StyledPlayAgainButton onClick={() => setCellBoxes(Array(9).fill(""))}>
        Play Again
      </StyledPlayAgainButton>
    </div>
    </>
  );
}

export default CellBoxGrid;
