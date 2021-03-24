import React, { useReducer, useState, lazy, Suspense } from 'react';
import './styles/wrapper.css';

const RiverInformation = lazy(() => import( /* webpackChunkName: "RiverInformation" */ './riverInformation/RiverInformation'));

const Wrapper = () => {
  const [river, setRiver] = useState('nile');
  const [show, toggle] = useReducer(state => !state, true);

  return (
    <div className="wrapper">
      <h1>Worlds Longest River</h1>
      <div><button onClick={toggle}>Toggle Details</button></div>
      <button onClick={() => setRiver('nile')}>Nile</button>
      <button onClick={() => setRiver('amazon')}>Amazon</button>
      <button onClick={() => setRiver('yangtze')}>Yangtze</button>
      <button onClick={() => setRiver('mississippi')}>Mississippi</button>

      <Suspense fallback={<div>Loading component...</div>}>
        {show && <RiverInformation name={river} />}
      </Suspense>
    </div>
  )
}

export default Wrapper
