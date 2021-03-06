import PropTypes from 'prop-types'
import AnimalDetails from '../animalDetails/AnimalDetails'
import Card from '../card/Card'

const AnimalCard = ({ name, size, ...props }) => {
  return (
    <Card title="Animals" details={<AnimalDetails {...props} />}>
      <h3>{name}</h3>
      <div>{size}kg</div>
    </Card>
  )
}

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default AnimalCard
