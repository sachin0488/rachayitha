import axios from 'axios'

const URL = 'https://novel-jsonserver-production.up.railway.app/explore'

export const fetchExploreSection = async () => {
  const res = await axios.get(URL)

  return res.data
}