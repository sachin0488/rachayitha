import LandingPageAfterLogin from 'modules/Landing/pages/LandingAfterLogin.page'
import LandingPageWithoutLogin from 'modules/Landing/pages/LandingWithoutLogin.page'

import { useUserService } from 'modules/Auth/service/User.service'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';
export default function Home() {
  const { isLoggedIn } = useUserService()

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />} </>
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
