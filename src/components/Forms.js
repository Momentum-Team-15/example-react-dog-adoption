import useLocalStorageState from 'use-local-storage-state'
import axios from "axios"
import { useState } from "react"
export const LoginForm = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useLocalStorageState('myApplicationToken', null)

  const handleSubmit = (event) => {
    event.preventDefault()
    // make the request using the form values
    const logInURL = 'http://0.0.0.0:3002/api/auth/token/login/'
    axios.post(logInURL, {
      "username": name,
      "password": password
    }).then(res => setToken(res.data.auth_token))
  }

  return (
    <div className="form">
    <h1>I am a smol form</h1>
    <form action="" method="get" className="form-example" onSubmit={handleSubmit}>
      <div className="form-example">
        <label htmlFor="name">Enter your name: </label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div className="form-example">
        <label htmlFor="password">Enter your password: </label>
        <input type="password" name="password" id="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
      </div>
        <div className="form-example">
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  )
}
