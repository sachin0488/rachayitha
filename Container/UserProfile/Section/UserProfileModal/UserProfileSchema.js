import * as yup from 'yup'
const Schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  username: yup.string().required('username is required'),
  about: yup.string().required('bio is required'),
})
export default Schema
