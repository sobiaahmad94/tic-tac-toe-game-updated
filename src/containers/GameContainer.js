import React, { useState } from "react";
import CellBoxGrid from "../components/CellBoxGrid";


const GameContainer = () => {
    // state
    // setting cellBoxes to an array of 9 empty strings for the 3 * 3, 9 boxes
    const [cellBoxes, setCellBoxes] = useState(["", "", "", "", "", "", "", "", "",
    ]);
    // from MDN, I realised I could've done this Array(9).fill('') lol

    // setting X player to toggle between O player and X player to boolean for toggle
    const [xPlayerIsNext, setXPlayerIsNext] = useState(true);
    // setting the winner player (either O or X) but set to nout in it at the start
    const [winnerPlayer, setWinnerPlayer] = useState(null);

    return (
        <>
        {/* StyledGameContainerDiv is just to center stuff and apply CSS to everything */}
        {/* <StyledGameContainerDiv> */}
                {/* <h1>This is the GameContainer</h1> */}
                {/* passing props to other component */}
            <CellBoxGrid cellBoxes={cellBoxes} setCellBoxes={setCellBoxes} xPlayerIsNext={xPlayerIsNext} setXPlayerIsNext={setXPlayerIsNext} winnerPlayer={winnerPlayer} setWinnerPlayer={setWinnerPlayer}/>
        {/* </StyledGameContainerDiv> */}
        </>
    );
};

export default GameContainer;
