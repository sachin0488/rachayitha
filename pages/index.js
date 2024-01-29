import LandingPageAfterLogin from 'modules/Landing/pages/LandingAfterLogin.page'
import LandingPageWithoutLogin from 'modules/Landing/pages/LandingWithoutLogin.page'

import { useUserService } from 'modules/Auth/service/User.service'

export default function Home() {
  const { isLoggedIn } = useUserService()

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />} </>
}
