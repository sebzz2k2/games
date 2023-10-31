import Board from "./Board"
import { useState } from "react"

const TicTacToeGame = () => {
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [playerScore, setPlayerScore] = useState({
        X: 0,
        O: 0
    })
    return (
        <div>
            <div>
                <div className="score">
                    <div className="player">Player X: {playerScore.X}</div>
                    <div className="player">Player O: {playerScore.O}</div>
                </div>
                <div className="currentPlayer">Current Player: {currentPlayer}</div>
            </div>
            <Board setCurrentPlayer={setCurrentPlayer} setPlayerScore={setPlayerScore} currentPlayer={currentPlayer} /></div>
    )
}

export default TicTacToeGame