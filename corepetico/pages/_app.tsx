import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router, { useRouter } from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'
import Header from '../components/Header/Header'

const progress = new ProgressBar({
  size: 4,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
})

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

const noAuthRequired = ['/', '/login', '/signup', '/tutors']

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        ) : <ProtectedRoute>
          <Header />
          <Component {...pageProps} />
        </ProtectedRoute>}

      </AuthContextProvider>
    </>

  )

}

export default MyApp
