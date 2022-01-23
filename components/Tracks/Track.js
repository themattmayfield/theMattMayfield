import Link from "next/link";

export default function Track({ track }) {
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  console.log(track);
  return (
    <div className="flex items-center justify-between  cursor-pointer transition duration-150 ease-in-out hover:bg-custom-lightgray dark:hover:bg-custom-darkgray pr-4">
      <div className="flex space-x-6 items-center">
        <Link href={track?.album?.external_urls?.spotify}>
          <img className="w-20 h-20" src={track.album?.images[0].url} />
        </Link>
        <div className="flex flex-col">
          <Link href={track?.external_urls?.spotify}>
            <p className="hover:underline">{track.name}</p>
          </Link>
          <div className="flex flex-col md:flex-row ">
            <Link href={track?.artists[0]?.external_urls?.spotify}>
              <p className="hover:underline">{track.artists[0].name}</p>
            </Link>
            <span className="hidden md:block">&nbsp;&middot;&nbsp;&nbsp;</span>
            <p>{track.album.name}</p>
          </div>
          <p className="md:hidden">
            {millisToMinutesAndSeconds(JSON.stringify(track.duration_ms))}
          </p>
        </div>
      </div>

      <div className="hidden md:block ">
        {millisToMinutesAndSeconds(JSON.stringify(track.duration_ms))}
      </div>
    </div>
  );
}
