import 'bulma/css/bulma.min.css'
import { useState, useEffect } from 'react'
import { requestDogData } from './requests'
import DogList from './components/DogList'
import Dog from './components/Dog'
import {LoginForm} from './components/Forms'

function App() {
  const [dogList, setDogList] = useState([])
  const [selectedDogId, setSelectedDogId] = useState(null)

  useEffect(() => {
    requestDogData().then((response) => setDogList(response.data.animals))
  }, [])

  return (
    <LoginForm />
  )

  // return (
  //   <div className="App">
  //     <header className="has-background-info-dark p-5 mb-3">
  //       <h1 className="title has-text-white">Happy Valley Shelter</h1>
  //     </header>
  //     <h2 className="is-size-4 ml-5">Adopt a Dog</h2>
  //     <section className="dog-list is-flex is-flex-wrap-wrap mx-3">
  //       {selectedDogId ? (
  //         <Dog
  //           selectedDogId={selectedDogId}
  //           setSelectedDogId={setSelectedDogId}
  //         />
  //       ) : (
  //         <>
  //           {dogList && (
  //             <DogList dogList={dogList} setSelectedDogId={setSelectedDogId} />
  //           )}
  //         </>
  //       )}
  //     </section>
  //   </div>
  // )
}

export default App
