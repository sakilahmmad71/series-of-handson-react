import React, { memo, useMemo } from 'react'
import PropTypes from 'prop-types'

const itemize = (text, transformer) => {
  const letters = text.split('').filter(l => l !== ' ').reduce((collection, item) => {
    const letter = transformer ? transformer(item) : item
    return { ...collection, [letter]: (collection[letter] || 0) + 1 }
  }, {})

  return Object.entries(letters).sort((a, b) => b[1] - a[1])
}

const CharecterMap = ({ text, showExplaination, transformer }) => {
  const charecters = useMemo(() => itemize(text), [text, transformer])

  return (
    <div>
      {showExplaination && <p>This displays a list of the most common characters.</p>}

      Charecter Map:
      {charecters.map(character => (<div key={character[0]}>{character[0]}: {character[1]}</div>))}
    </div>
  )
}

CharecterMap.propType = {
  showExplaination: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  transformer: PropTypes.func
}

CharecterMap.defaultProps = {
  transformer: null
}

export default memo(CharecterMap)
