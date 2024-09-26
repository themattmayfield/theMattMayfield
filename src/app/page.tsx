import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import TopTracks from '@/components/TopTracks';
import {
  getTopTracksShort,
  getTopTracksMedium,
  getTopTracksLong,
} from '@/utils/spotify';

export default async function Home() {
  const { items: shortTracks } = await getTopTracksShort().then((res) =>
    res.json()
  );
  const { items: mediumTracks } = await getTopTracksMedium().then((res) =>
    res.json()
  );
  const { items: longTracks } = await getTopTracksLong().then((res) =>
    res.json()
  );
  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <TopTracks
        shortTracks={shortTracks}
        mediumTracks={mediumTracks}
        longTracks={longTracks}
      />
      <Contact />
    </>
  );
}
