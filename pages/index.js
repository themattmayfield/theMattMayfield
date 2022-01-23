import Layout from "components/Layout";
import Hero from "components/Hero";
import AboutMe from "components/AboutMe";
import Portfolio from "components/Portfolio";
import Contact from "components/Contact";
import TopTracks from "components/TopTracks";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Portfolio />
      <TopTracks />
      <Contact />
    </Layout>
  );
}
