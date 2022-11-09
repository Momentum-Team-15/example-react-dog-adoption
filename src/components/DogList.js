import {startCase}  from 'lodash'
import {DogCard} from './DogCard'

const DogList = ({dogList, setSelectedDogId}) => {
  return (
    <>
    {dogList.map((dog) => (
      <DogCard
        id={dog.id}
        key={dog.id}
        dogName={startCase(dog.name.toLowerCase())}
        image={dog.primary_photo_cropped ? dog.primary_photo_cropped["medium"] :""}
        description={dog.description}
        primaryBreed={dog.breeds.primary}
        traits={[dog.age, dog.gender, dog.size, ...dog.tags]}
        setSelectedDogId={setSelectedDogId}
      />
    ))}
    </>
  )
}


export default DogList
