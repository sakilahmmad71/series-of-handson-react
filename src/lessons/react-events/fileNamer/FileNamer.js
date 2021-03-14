import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const handleWindowClick = () => setAlert(false)

    if (alert) {
      window.addEventListener('click', handleWindowClick)
    } else {
      window.removeEventListener('click', handleWindowClick)
    }

    return () => window.removeEventListener('click', handleWindowClick)
  }, [alert, setAlert])

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input name="name" autoComplete="off" name="name" onChange={(event) => setName(event.target.value)} />
        </label>

        <div className="information-wrapper">
          <button className="information" onClick={() => setAlert(true)} type="button" >more information</button>
          {alert && <div className="popup">
            <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
             <br />
            <span role="img" aria-label="not allowed">⛔️</span> *
           </div>
          }
        </div>

        <div>
          <button onClick={validateInput}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default FileNamer
