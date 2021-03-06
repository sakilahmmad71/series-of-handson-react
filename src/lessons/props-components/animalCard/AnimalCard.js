import PropTypes from 'prop-types'

const AnimalCard = ({ name, additional, scientificName, size, diet, showAdditionalInformation }) => {
	return (
		<>
			<div>
				<h2>{name}</h2>
				<h3>{scientificName}</h3>
				<h4>{size}kg</h4>
				<div>{diet.join(', ')}.</div>
				<button onClick={() => showAdditionalInformation(additional)}>More Info</button>
			</div>
		</>
	)
}

AnimalCard.propType = {
	name: PropTypes.string.isRequired,
	additional: PropTypes.shape({
		link: PropTypes.string,
		notes: PropTypes.string,
	}),
	scientificName: PropTypes.string.isRequired,
	size: PropTypes.number.isRequired,
	diet: PropTypes.arrayOf(PropTypes.string).isRequired,
	showAdditionalInformation: PropTypes.func.isRequired
}

AnimalCard.defaultProps = {
	additional: {
		notes: 'No Additional Information'
	}
}

export default AnimalCard
