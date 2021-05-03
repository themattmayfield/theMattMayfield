import Layout from '../components/Layouts/Layout'
import Hero from '../components/Sections/Hero'
import AboutMe from '../components/Sections/AboutMe'
import Portfolio from '../components/Sections/Portfolio'
import Contact from '../components/Sections/Contact'
import TopTracks from '../components/Sections/TopTracks'

export default function Home() {

  return (
    <Layout>
        <Hero />
        <AboutMe />
        {/* <Portfolio /> */}
        <TopTracks />
        <Contact />        
    </Layout>
  )
}
