import Layout from '../components/Layouts/Layout'
import Hero from '../components/Sections/Hero'
import AboutMe from '../components/Sections/AboutMe'
import Portfolio from '../components/Sections/Portfolio'
import Contact from '../components/Sections/Contact'

export default function Home() {

  return (
    <Layout>
        <Hero />
        <AboutMe />
        <Portfolio />
        <Contact />        
    </Layout>
  )
}
