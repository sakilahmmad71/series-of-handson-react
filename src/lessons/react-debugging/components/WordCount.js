import { useContext } from 'react'
import PropTypes from 'prop-types'
import TextContext from '../context/TextContext'

const WordCount = ({ show }) => {
  const text = useContext(TextContext);

  if (!show) {
    return null;
  }

  return (
    <div>
      Character Count: {text.split(' ').length}
    </div>
  )
}

WordCount.proTypes = {
  show: PropTypes.bool.isRequired
}

export default WordCount
