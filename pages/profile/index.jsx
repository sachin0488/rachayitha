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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}