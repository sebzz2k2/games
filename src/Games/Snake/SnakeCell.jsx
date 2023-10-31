import PropTypes from "prop-types"
import { useEffect } from "react"
const SnakeCell = ({
    cellSize,
    snakeHeadPosition,
}) => {

    useEffect(() => {
        console.log(snakeHeadPosition)
    }, [])
    return (
        <div
            style={{
                position: 'absolute',
                top: Math.floor(snakeHeadPosition.y * cellSize),
                left: Math.floor(snakeHeadPosition.x * cellSize),
                backgroundColor: '#00fffe',
                borderRadius: '5%',
                border: '1px solid #242424',
                height: cellSize,
                width: cellSize,
            }}
        ></div>
    )
}

SnakeCell.propTypes = {
    cellSize: PropTypes.number.isRequired,
    snakeHeadPosition: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    })

}

export default SnakeCell