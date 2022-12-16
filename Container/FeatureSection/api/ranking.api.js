import axios from 'axios'

const URL = 'https://novel-jsonserver-production.up.railway.app/rankingbook'

export const fetchRankingSection = async () => {
  const res = await axios.get(URL)

  return res.data
}
