import { useState } from 'react'
import PropTypes from 'prop-types'
import './ticTacToe.css'
const Board = ({
    setCurrentPlayer,
    setPlayerScore,
    currentPlayer
}) => {

    const [grid, setGrid] = useState(Array.from({ length: 3 }, () => Array(3).fill(null)))
    const checkWinner = (grid) => {
        const checkLine = (a, b, c) => a === currentPlayer && b === currentPlayer && c === currentPlayer;

        for (let i = 0; i < 3; i++) {
            if (checkLine(grid[i][0], grid[i][1], grid[i][2]) || checkLine(grid[0][i], grid[1][i], grid[2][i])) {
                setPlayerScore((prevScore) => ({
                    ...prevScore,
                    [currentPlayer]: prevScore[currentPlayer] + 1,
                }));
                setGrid(Array.from({ length: 3 }, () => Array(3).fill(null)));
                alert(`${currentPlayer} won`);
                return;
            }
        }

        if (checkLine(grid[0][0], grid[1][1], grid[2][2]) || checkLine(grid[0][2], grid[1][1], grid[2][0])) {
            setPlayerScore((prevScore) => ({
                ...prevScore,
                [currentPlayer]: prevScore[currentPlayer] + 1,
            }));
            setGrid(Array.from({ length: 3 }, () => Array(3).fill(null)));
            alert(`${currentPlayer} won`);
            return;
        }


        if (grid.every((row) => row.every((cell) => cell !== null))) {
            setGrid(Array.from({ length: 3 }, () => Array(3).fill(null)));
            alert("Draw");
            return;
        }
    };


    const handleClick = (e) => {
        const id = e.target.id
        const [row, col] = id.split("-")
        let newGrid = [...grid]
        if (newGrid[row][col] !== null) {
            alert("Already filled")
            return
        }
        newGrid[row][col] = currentPlayer
        setGrid(newGrid)
        checkWinner(newGrid)
        setCurrentPlayer(prevPlayer => prevPlayer === "X" ? "O" : "X")

    }

    return (
        <>
            <div className="grid">
                {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <div key={colIndex} className="cell" id={`${rowIndex}-${colIndex}`} onClick={handleClick} >{grid[rowIndex][colIndex]}</div>
                        ))}
                    </div>
                ))
                }
            </div >
        </>

    )
}

Board.propTypes = {
    setCurrentPlayer: PropTypes.func.isRequired,
    setPlayerScore: PropTypes.func.isRequired,
    currentPlayer: PropTypes.string.isRequired
}

export default Board