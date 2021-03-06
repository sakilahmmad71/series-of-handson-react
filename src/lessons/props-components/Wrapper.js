import React from 'react'
import AnimalCard from './animalCard/AnimalCard'
import data from './data/data'

const Wrapper = () => {
  const showAdditionalInformation = (additional) => {
    const alertInformation = Object.entries(additional).map((information) => `${information[0]}: ${information[1]}`).join('\n')
    alert(alertInformation)
  }

  return (
    <div>
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard key={animal.name} name={animal.name} additional={animal.additional} scientificName={animal.scientificName} size={animal.size} diet={animal.diet} showAdditionalInformation={showAdditionalInformation} />
      ))}
    </div>
  )
}

export default Wrapper
