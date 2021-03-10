import { useContext } from 'react'
import PropTypes from 'prop-types'
import TextContext from '../context/TextContext'

const CharecterCount = ({ show }) => {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return (
    <div>
      Character Count: {text.length}
    </div>
  )
}

CharecterCount.proTypes = {
  show: PropTypes.bool.isRequired
}

export default CharecterCount
