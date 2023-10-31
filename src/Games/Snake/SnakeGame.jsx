import { useState } from 'react'
import Board from './Board'

const SnakeGame = () => {
    const [score, setScore] = useState(0)

    const [boardDimensions] = useState({
        height: Math.floor(window.outerHeight / 12),
        width: Math.floor(window.outerWidth / 12)
    })
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 20px)',
        }}>
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    padding: '10px',
                    color: '#111',
                    fontSize: '24px',
                }}
            >Your Score Is: {score}</div>
            <Board cellSize={7} boardHeight={boardDimensions.height} boardWidth={boardDimensions.width} setScore={setScore} />
        </div>
    )
}

export default SnakeGame