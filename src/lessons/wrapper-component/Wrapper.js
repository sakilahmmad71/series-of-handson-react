import AnimalCard from './animalCard/AnimalCard'
import animals from './data/data'

const Wrapper = () => {
  return (
    <div>
      {animals.map((animal) => (
        <AnimalCard key={animal.name} name={animal.name} size={animal.size} diet={animal.diet} scientificName={animal.scientificName} />
      ))}
    </div>
  )
}

export default Wrapper
