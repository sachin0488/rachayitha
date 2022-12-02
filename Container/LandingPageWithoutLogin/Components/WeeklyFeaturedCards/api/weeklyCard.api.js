import { ApiInstance } from '../../../../../api/global.api'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../../store/slices/global/user.slice'
import axios from 'axios'
const API_URL = 'https://novel-jsonserver-production.up.railway.app/weekly_feature'
const Url = '/potentialstartletbook'

export const weeklyAPI = async isLoggedIn => {
  // console.log(isLoggedIn, 'isLoggedIN')
  // return await ApiInstance({
  //   url: API_URL,
  //   method: 'GET',
  // })
  const res = await axios.get(API_URL)

  return res.data
}
