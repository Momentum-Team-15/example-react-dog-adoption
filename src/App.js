import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import {requestDogData} from './requests'

function App() {
  const [dogList, setDogList] = useState([])

  useEffect(() => {
    requestDogData().then(response => setDogList(response.data.animals))
  }, [])


  return (
    <div className="App">
      <header className="has-background-info-dark p-5 mb-3">
        <h1 className="title has-text-white">Happy Valley Shelter</h1>
      </header>
      <h2 className="is-size-4 ml-5">Adopt a Dog</h2>
      <section className="dog-list is-flex is-flex-wrap-wrap mx-3">
        {dogList && dogList.map((dog) => (
          <DogCard
            id={dog.id}
            key={dog.id}
            dogName={dog.name}
            image={dog.photos[0]["medium"]}
            description={dog.description}
            primaryBreed={dog.breeds.primary}
            traits={[dog.age, dog.gender, dog.size, ...dog.tags]}
          />
        ))}
      </section>
    </div>
  )
}

const DogCard = ({ id, dogName, image, description, traits }) => {

  return (
    <div
      className="dog-card card m-3 mt-6"
      style={{ maxWidth: '300px', height: '450px' }}
    >
      <div className="card-image">
        <figure className="image is2by3">
          <img src={image} alt={description} style={{width: '200px'}}/>
        </figure>
      </div>
      <div className="p-3">
        <div className="is-flex is-justify-content-space-between">
          <h2 className="subtitle mb-0 has-text-weight-semibold">{dogName}</h2>
        </div>
          <div className="dog-traits" style={{ maxHeight: '300px' }}>
            <ul className="is-flex is-flex-wrap-wrap">
              {traits.map((trait, idx) => (
                <li className="p-1" key={idx}>
                  <span className="tag is-info is-light">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </div>
  )
}
export default App
