import LandingPageAfterLogin from 'Container/Landing/pages/LandingAfterLogin.page'
import LandingPageWithoutLogin from 'Container/Landing/pages/LandingWithoutLogin.page'

import { useUserService } from 'Container/Auth/service/User.service'

export default function Home() {
  const { isLoggedIn } = useUserService()

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />} </>
}
