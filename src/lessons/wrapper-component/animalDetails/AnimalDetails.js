import PropTypes from 'prop-types';

const convertFood = (food) => {
  switch (food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
    default:
      return '🌱';
  }
}

const AnimalDetails = ({ diet, scientificName }) => {
  return (
    <div>
      <h4>Details:</h4>
      <div>{scientificName}</div>
      <div>
        Diet: {diet.map(food => convertFood(food)).join(' ')}
      </div>
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired
}

export default AnimalDetails