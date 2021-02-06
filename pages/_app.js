import '../styles/globals.css'
import { NavProvider } from '../components/Utils/Nav/NavContext'

function MyApp({ Component, pageProps }) {
  return (
  <NavProvider>
    <Component {...pageProps} />
    </NavProvider>
  )
}

export default MyApp
