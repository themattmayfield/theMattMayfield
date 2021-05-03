export default function Track(track) {
    return (
      <a 
      href={track.songUrl}
      className="flex flex-row justify-center items-baseline hover:bg-black hover:bg-opacity-20 transition duration-300 ease-in-out cursor-pointer max-w-3xl w-full mt-8">
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
          {track.ranking}
        </p>
        <div className="flex flex-col pl-3">
          <p
            className="font-medium text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"            
            target="_blank"
            rel="noopener noreferrer"
          >
            {track.title}
          </p>
          <p
            className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
            color="gray.500"
          >
            {track.artist}
          </p>
        </div>
      </a>
    );
  }