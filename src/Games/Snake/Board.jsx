import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Food from './Food';
import Snake from './Snake';
import './snake.css';

const Board = ({
  boardWidth,
  boardHeight,
  cellSize,
  setScore,
}) => {
  const [foodPosition, setFoodPosition] = useState({
    x: 0,
    y: 0,
  })
  const [snakeSegments, setSnakeSegments] = useState([
    { x: 0, y: 0 }
  ]);

  const [prevMove, setPrevMove] = useState('right');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(moveSnake, 100);
    return () => clearInterval(interval);
  }, [snakeSegments]);

  useEffect(() => {
    if (snakeSegments[0].x === foodPosition.x && snakeSegments[0].y === foodPosition.y) {
      createNewFood();
      setScore((score) => score + 1);
      setSnakeSegments((segments) => [...segments, {}]);
    }
  }, [foodPosition, snakeSegments]);

  const handleKeyPress = (event) => {

    switch (event.key) {
      case 'ArrowRight':
        setPrevMove('right');
        break;
      case 'ArrowLeft':
        setPrevMove('left');
        break;
      case 'ArrowUp':
        setPrevMove('up');
        break;
      case 'ArrowDown':
        setPrevMove('down');
        break;
      default:
        break;
    }
  }


  const moveSnake = () => {
    let newSegments = [...snakeSegments];
    let newHead = { ...newSegments[0] };
    switch (prevMove) {
      case 'right':
        newHead.x += 1;
        break;
      case 'left':
        newHead.x -= 1;
        break;
      case 'up':
        newHead.y -= 1;
        break;
      case 'down':
        newHead.y += 1;
        break;
      default:
        break;
    }

    newSegments = [newHead, ...newSegments.slice(0, -1)];
    const isWithinXBounds = newHead.x >= 0 && newHead.x < boardWidth;
    const isWithinYBounds = newHead.y >= 0 && newHead.y < boardHeight;
    if (!isWithinXBounds || !isWithinYBounds) {
      console.log('out of bounds');
      restartGame();
      return;
    }
    if (newSegments.slice(1).some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
      restartGame();
      return;
    }
    setSnakeSegments(newSegments);
  }

  const restartGame = () => {
    setPrevMove('right');
    setSnakeSegments([{ x: 0, y: 0 }]);
    createNewFood();
    setScore(0);
  }

  const createNewFood = () => {
    const newFoodPosition = {
      x: Math.floor(Math.random() * boardWidth),
      y: Math.floor(Math.random() * boardHeight),
    }
    setFoodPosition(newFoodPosition);
  }

  return (
    <div
      className='gradient-board'
      style={{
        position: 'relative',
        height: boardHeight * cellSize,
        width: boardWidth * cellSize,
        backgroundColor: '#242424',
      }}
    >
      <Snake snakeSegments={snakeSegments} cellSize={cellSize} />


      <Food
        cellSize={cellSize}
        boardWidth={boardWidth}
        boardHeight={boardHeight}
        foodPosition={foodPosition}
      />
    </div >
  );
};

Board.propTypes = {
  boardWidth: PropTypes.number.isRequired,
  boardHeight: PropTypes.number.isRequired,
  cellSize: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Board;

