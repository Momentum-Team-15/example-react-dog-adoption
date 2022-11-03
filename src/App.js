import 'bulma/css/bulma.min.css';
import { useState } from 'react';

function App({ dogData }) {
  return (
    <div className="App m-3">
      <h1 className="title">Dogs Go Here</h1>
      <div className="dog-list">
          {dogData.map(dog =>
            <DogCard dogName={dog.name} />
          )}
      </div>

    </div>
  );
}


const DogCard = ({dogName}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = (event) => {
    setExpanded(!expanded)
  }

  return (
    <div className="dog-card">
      <h2>{dogName}</h2>
      <button className="button" onClick={handleClick}>Show more info</button>
      { expanded &&
        <div className="dog-description">This is a nice dog</div>
      }

    </div>
  )
}
export default App;
