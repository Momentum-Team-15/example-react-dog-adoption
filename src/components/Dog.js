import { useEffect, useState } from "react"
import { requestDogDetail } from "../requests"
export default function Dog({selectedDogId, setSelectedDogId}) {
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [description, setDescription] = useState('')
  const [contact, setContact] = useState('')
  const handleGoBack = () => setSelectedDogId(null)
  useEffect(() => {
    requestDogDetail(selectedDogId).then(res => {
      console.log(res.data.animal)
      setName(res.data.animal.name)
      setBreed(res.data.animal.breeds.primary)
      setContact(res.data.animal.contact.email)
      setDescription(res.data.animal.description)
    })
  }, [selectedDogId])

  return (
    <div>
      <button onClick={handleGoBack}>Go Back to All Dogs</button>
      <h1>Hello I am a Dog Detail Component</h1>
      <div className="dog-detail">
          <h2>{name}</h2>
          <p>{breed}</p>
          <p>{description}</p>
          <p>{contact}</p>
      </div>
    </div>
  )
}
