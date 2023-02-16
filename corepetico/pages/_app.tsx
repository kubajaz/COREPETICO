import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
//import { AuthProvider } from '../auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from '../components/Navbar'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const noAuthRequired = ['/', '/login', '/signup', '/search']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(process.env.NEXT_FIREBASE_APP_ID, process.env.NEXT_FIREBASE_AUTH_DOMAIN, 'key')
  return (
    <>
      <AuthContextProvider>
        <NavbarComp />
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>}

      </AuthContextProvider>
    </>

  )

}

export default MyApp
