import SnakeCell from "./SnakeCell"
import Proptypes from "prop-types"
const Snake = ({ snakeSegments, cellSize }) => {
    return (<>
        {
            snakeSegments.map((segment, index) => (
                <SnakeCell
                    key={index}
                    cellSize={cellSize}
                    snakeHeadPosition={segment}
                />
            ))
        }
    </>
    )
}

Snake.propTypes = {
    cellSize: Proptypes.number.isRequired,
    snakeSegments: Proptypes.array.isRequired
}

export default Snake