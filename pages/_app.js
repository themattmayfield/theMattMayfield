import '../styles/globals.css'
import { NavProvider } from '../components/Utils/NavContext'

function MyApp({ Component, pageProps }) {
  return (
  <NavProvider>
    <Component {...pageProps} />
    </NavProvider>
  )
}

export default MyApp
