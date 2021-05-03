import useSWR from "swr";
import SectionWrapper from "../Layouts/SectionWrapper";
import fetcher from "../../lib/fetcher";
import Track from "../Track";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <SectionWrapper id="tracks" title="Top Tracks">
        <div className="text-center flex flex-col items-center">
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
        </div>
      </SectionWrapper>
    </>
  );
}
