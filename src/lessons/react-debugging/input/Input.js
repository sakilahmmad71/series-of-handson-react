import { useState } from 'react'
import TextContext from '../context/TextContext'
import '../styles/Input.css'
import TextInformation from '../textInformation/TextInformation'

const Input = () => {
  const [text, setText] = useState('')

  return (
    <TextContext.Provider value={text}>
      <div className="wrapper">
        <label htmlFor="text">Add Your Text Here: <br />
          <textarea id="text" name="text" rows="10" cols="100" onChange={(e) => setText(e.target.value)} ></textarea>
        </label>
        <TextInformation />
      </div>
    </TextContext.Provider>
  )
}

export default Input
