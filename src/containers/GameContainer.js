import React, { useState } from "react";
import CellBoxGrid from "../components/CellBoxGrid";


const GameContainer = () => {
    const [cellBoxes, setCellBoxes] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    
    const [xPlayerIsNext, setXPlayerIsNext] = useState(true);
    const [winnerPlayer, setWinnerPlayer] = useState(null);

    return (
        <>
            <CellBoxGrid
                cellBoxes={cellBoxes}
                setCellBoxes={setCellBoxes}
                xPlayerIsNext={xPlayerIsNext}
                setXPlayerIsNext={setXPlayerIsNext}
                winnerPlayer={winnerPlayer}
                setWinnerPlayer={setWinnerPlayer}/>
        </>
    );
};

export default GameContainer;
