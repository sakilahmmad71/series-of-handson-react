import { useState, useEffect, useRef } from 'react';
import './styles/wrapper.css';
import { getList, setItem } from './services/list';

const Wrapper = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;

    if (list.length && !alert) {
      return;
    }

    getList()
      .then(items => {
        if (mounted.current) {
          setList(items)
        }
      })

    return () => {
      mounted.current = false;
    }
  }, [alert, list]);

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        if (mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setItem(itemInput)
      .then(() => {
        if (mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  }

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>{list.map(item => <li key={item.item}>{item.item}</li>)}</ul>

      {alert && <h2> Submit Successful</h2>}
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <label>
            <p>New Item</p>
            <input type="text" value={itemInput} onChange={(event) => setItemInput(event.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Wrapper
