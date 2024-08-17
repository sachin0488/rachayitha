import React from 'react'
import AnotherUserProfilePage from 'modules/UserProfile/Pages/anther-user-profile.page'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Profile = () => {
  return (
    <>
      <AnotherUserProfilePage />
    </>
  )
}

export default Profile

export async function getServerSideProps({ req, res, query, params, locale }) {

  // console.log('getServerSideProps', { query, params, locale })
    
  const contentId = query.userId;
  return {
    props: {
      contentId,
      ...(await serverSideTranslations(locale, ["common"])),
      
    },
  }
}

