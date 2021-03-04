import { useState, useReducer, useCallback } from 'react'
import CharecterMap from '../charecterMap/CharecterMap'

const Textarea = () => {
  const [text, setText] = useState('')
  const [showExplaination, toggleExplaination] = useReducer(state => !state, false)
  const transformer = useCallback(item => item.toLowerCase(), [])

  return (
    <div>
      <label htmlFor="textarea">
        <p>Place your texts here</p>
        <textarea id="text" name="text" rows="10" cols="100" onChange={(e) => setText(e.target.value)}></textarea>
        <div><button onClick={toggleExplaination}>Show Explanation</button></div>

        <CharecterMap text={text} showExplaination={showExplaination} transformer={transformer} />
      </label>
    </div>
  )
}

export default Textarea
