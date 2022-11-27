import axios from 'axios'
import { useRouter } from 'next/router'

const fetchBookDetail = async book => {
  const res = await axios.get(`http://localhost:4000/explore/${book}`)
  // console.log(res.data);
  return res.data
}

export default fetchBookDetail
