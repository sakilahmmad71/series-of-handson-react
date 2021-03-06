import PropTypes from 'prop-types'

const Card = ({ children, details, title }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        {details}
      </div>
      {children}
    </div>
  )
}

Card.propType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ]),
  details: PropTypes.element,
  title: PropTypes.string.isRequired
}

Card.defaultProps = {
  details: null
}

export default Card
