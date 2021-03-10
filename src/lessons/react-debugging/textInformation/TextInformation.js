import React, { useReducer } from 'react'
import CharecterCount from '../components/CharecterCount'
import CharecterMap from '../components/CharecterMap'
import WordCount from '../components/WordCount'

const reducer = (state, action) => {
  return { ...state, [action]: !state[action] }
}


const TextInformation = () => {
  const [tabs, toggleTabs] = useReducer(reducer, { characterCount: true, wordCount: true, characterMap: true });

  return (
    <div>
      <button onClick={() => toggleTabs('characterCount')}>Character Count</button>
      <button onClick={() => toggleTabs('wordCount')}>Word Count</button>
      <button onClick={() => toggleTabs('characterMap')}>Character Map</button>
      <CharecterCount show={tabs.characterCount} />
      <WordCount show={tabs.wordCount} />
      <CharecterMap show={tabs.characterMap} />
    </div>
  )
}

export default TextInformation