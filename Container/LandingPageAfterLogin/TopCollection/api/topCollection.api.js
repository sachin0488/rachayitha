import axios from 'axios'

const URL = 'https://novel-jsonserver-production.up.railway.app/top_collection'

export const fetchTopCollection = async () => {
  const res = await axios.get(URL)

  return res.data
}
