import axios from 'axios'


export const fetchTopCollection = () => {
  const URL = 'https://novel-jsonserver-production.up.railway.app/top_collection'
  return axios.get(URL)
}
