import axios from 'axios'


const getToken = async (clientId, clientSecret) => {
    const response = await axios.post('https://api.petfinder.com/v2/oauth2/token', {
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret
  })
  return response.data.access_token
}

export const requestDogData = async () => {
  const token = await getToken(process.env.REACT_APP_PETFINDER_API_KEY, process.env.REACT_APP_PETFINDER_SECRET)
  const URL='https://api.petfinder.com/v2/animals?type=dog&location=hillsborough%2C%20nc&good_with_children=true&distance=30&limit=10'

  const response = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response
}

