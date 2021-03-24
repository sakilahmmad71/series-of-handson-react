import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getRiverInformation } from '../services/rivers';

const RiverInformation = ({ name }) => {
  const [riverInformation, setRiverInformation] = useState();

  useEffect(() => {
    let mounted = true;
    getRiverInformation(name)
      .then(riverInfo => {
        if (mounted) {
          setRiverInformation(riverInfo)
        }
      })
      .catch(error => console.log(error));

    return () => {
      mounted = false;
    }
  }, [name]);

  return (
    <div>
      <h4>River informations</h4>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </div>
  )
}

RiverInformation.propTypes = {
  name: PropTypes.string.isRequired
}

export default RiverInformation
