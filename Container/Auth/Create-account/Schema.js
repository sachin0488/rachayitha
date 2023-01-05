import * as yup from 'yup'

const Schema = yup.object().shape({
  full_name: yup.string().required('full name is required'),
  bio: yup.string().required('bio is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Confirm Password should be equal to Password')
    .required('Confirm Password is required'),
})

export default Schema
