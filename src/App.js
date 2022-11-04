import 'bulma/css/bulma.min.css'
import { useState } from 'react'

function App({ dogData }) {
  return (
    <div className="App">
      <header className="has-background-info-dark p-5 mb-3">
        <h1 className="title has-text-white">Happy Valley Shelter</h1>
      </header>
      <h2 className="is-size-4 ml-5">Adopt a Dog</h2>
      <section className="dog-list is-flex is-flex-wrap-wrap mx-3">
        {dogData.map((dog) => (
          <DogCard
            dogName={dog.name}
            image={dog.image}
            description={dog.description}
            traits={dog.traits}
          />
        ))}
      </section>
    </div>
  )
}

const DogCard = ({ dogName, image, description, traits }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = (event) => {
    setExpanded(!expanded)
  }

  return (
    <div
      className="dog-card card m-3 mt-6"
      style={{ maxWidth: '300px', height: '400px' }}
    >
      <div className="card-image">
        <figure class="image is2by3">
          <img src={image} alt={description} />
        </figure>
      </div>
      <div className="p-3">
        <div className="is-flex is-justify-content-space-between">
          <h2 className="subtitle mb-0 has-text-weight-semibold">{dogName}</h2>
          <button
            className="ml-2 button is-small is-outlined"
            onClick={handleClick}
          >
            {expanded ? 'Less' : 'More'} Info
          </button>
        </div>
        {expanded && (
          <div className="dog-traits" style={{ maxHeight: '300px' }}>
            <ul className="is-flex is-flex-wrap-wrap">
              {traits.map((trait) => (
                <li className="p-1">
                  <span className="tag is-info is-light">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
export default App
