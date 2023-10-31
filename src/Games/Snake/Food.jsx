
import PropTypes from 'prop-types';
import "./snake.css"


const Food = ({
    cellSize,
    foodPosition

}) => {

    return (
        <div
            className='food'
            style={{
                position: 'absolute',
                top: foodPosition.y * cellSize,
                left: foodPosition.x * cellSize,
                backgroundColor: '#ff0000',
                height: cellSize,
                width: cellSize,
                borderRadius: '50%',
            }}></div>
    )
}

Food.propTypes = {
    cellSize: PropTypes.number.isRequired,
    foodPosition: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
    }).isRequired,
}

export default Food