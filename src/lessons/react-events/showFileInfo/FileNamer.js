import { useState } from 'react'
import '../styles/FileNamer.css'

const FileNamer = () => {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)

  const validateInput = (event) => {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }

    setAlert(false);
  }

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input name="name" autoComplete="off" name="name" onChange={(event) => setName(event.target.value)} onFocus={() => setAlert(true)} onBlur={() => setAlert(false)} />
        </label>

        <div>
          <button onClick={validateInput}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default FileNamer
