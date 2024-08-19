import React from 'react'
import UserProfilePage from 'modules/UserProfile/Pages/user-profile.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Profile = () => {
  return (
    <>
      <UserProfilePage />
    </>
  )
}

export default Profile



export async function getServerSideProps({ req, res, query, params ,locale}) {

  return{
    props:{
      ...(await serverSideTranslations(locale, ["common"])),
    }
  }
}