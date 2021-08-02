import Layout from "@/components/Layouts/Layout";
import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/About/AboutMe";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Contact/Contact";
import TopTracks from "@/components/Tracks/TopTracks";

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
