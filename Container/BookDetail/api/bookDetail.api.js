import axios from 'axios'
import { useRouter } from 'next/router'

const fetchBookDetail = async book => {
  const res = await axios.get(`https://novel-jsonserver-production.up.railway.app/${book}`)
  // console.log(res.data);
  return res.data
}

export default fetchBookDetail
