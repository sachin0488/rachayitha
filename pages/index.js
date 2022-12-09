// import LandingPageAfterLogin from '../Container/LandingPageAfterLogin/LandingPageAfterLogin'
import LandingPageWithoutLogin from '../Container/LandingPageWithoutLogin/LandingPageWithoutLogin'
import { useDispatch, useSelector } from 'react-redux'
import LandingPageAfterLogin from 'Container/Landing/pages/LandingAfterLogin.page'

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.user)

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />}; </>
}
