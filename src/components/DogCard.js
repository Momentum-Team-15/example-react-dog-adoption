export const DogCard = ({ id, dogName, image, description, traits, setSelectedDogId }) => {

  const handleSelect = () => {
    setSelectedDogId(id)
    console.log("You selected", dogName)
  }

  return (
    <div
      className="dog-card card m-3 mt-6"
      style={{ maxWidth: '300px', height: '450px' }}
    >
      <div className="card-image">
        <figure className="image is2by3">
        {
          image && <img src={image} alt={description} style={{width: '200px'}}/>
        }
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
      <div className='button'>
        <button onClick={handleSelect}>Select{dogName}</button>
      </div>
    </div>
  )
}
