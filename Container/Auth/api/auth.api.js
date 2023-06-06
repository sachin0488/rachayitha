import { APIInstance } from 'api/global.api'

export const createAccountAPI = ({ username, email, password, bio, full_name, birth_date, gender }) => {
  return APIInstance({
    url: '/register/',
    method: 'POST',
    data: { user: { username, email, password, bio, full_name, birth_date, gender } },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })
}

export const loginAPI = ({ email, password }) => {
  return APIInstance({
    url: '/login/',
    method: 'POST',
    data: { user: { email, password } },
    headers: {
      'Content-Type': 'application/json',
      Authorization: undefined,
    },
  })
}

export const generateOTPByEmailAPI = ({ email }) => {
  return APIInstance({
    url: '/user/generateOTP',
    method: 'POST',
    data: { email },
  })
}

export const generateOTPByTokenAPI = () => {
  return APIInstance({
    url: '/user/generateOTP',
    method: 'GET',
  })
}

export const changeEmailAPI = ({ email, otp }) => {
  return APIInstance({
    url: '/user/changeEmail',
    method: 'PATCH',
    data: { email, otp },
  })
}

export const changePasswordAPI = ({ email, otp, password }) => {
  return APIInstance({
    url: '/user/changePassword',
    method: 'POST',
    data: { email, otp, password },
  })
}

export const verifyEmailAPI = ({ email, otp }) => {
  return APIInstance({
    url: '/user/verifyEmail',
    method: 'POST',
    data: { email, otp },
  })
}

export const fetchUserDataAPI = () => {
  return APIInstance({
    url: '/user/',
    method: 'GET',
  })
}

export const logoutUserAPI = () => {
  return APIInstance({
    url: '/logout/',
    method: 'POST',
  })
}

export const sendResetPasswordLinkByEmailAPI = data => {
  return APIInstance({
    url: '/password_reset/',
    method: 'POST',
    data,
  })
}

export const resetPasswordByTokenAPI = data => {
  return APIInstance({
    url: '/password_reset/confirm/',
    method: 'POST',
    data,
  })
}
