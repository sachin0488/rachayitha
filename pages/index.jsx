import { useSelector } from 'react-redux'
import LandingPageAfterLogin from 'container/Landing/Pages/LandingAfterLogin-page'
import LandingPageWithoutLogin from 'container/Landing/Pages/LandingWithoutLogin-page'

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.user)

  return <>{isLoggedIn ? <LandingPageAfterLogin /> : <LandingPageWithoutLogin />} </>
}
