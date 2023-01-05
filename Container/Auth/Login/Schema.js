import * as yup from 'yup'
const Schema = yup.object().shape({
  email: yup.string().email().required('Email is required'),

  password: yup.string().required('password is required'),
})
export default Schema
