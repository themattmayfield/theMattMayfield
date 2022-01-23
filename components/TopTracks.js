import React, { useState, useEffect } from "react";
import SectionWrapper from "components/SectionWrapper";
import Track from "./Track";
import catchErrors from "utils/catchErrors";
import {
  getTopTracksLong,
  getTopTracksMedium,
  getTopTracksShort,
} from "utils/spotify";
import dynamic from "next/dynamic";

// This is to prevent the loading component from ssr and throwing 'classname mismatch' error
const Loading = dynamic(() => import("components/Loading"), { ssr: false });

export default function Tracks() {
  const [topTracks, setTopTracks] = useState([]);
  const [activeRange, setActiveRange] = useState("long");
  const [amountToShow, setAmountToShow] = useState(5);

  const apiCalls = {
    long: getTopTracksLong(),
    medium: getTopTracksMedium(),
    short: getTopTracksShort(),
  };

  const types = [
    {
      label: "All Time",
      activeRange: "long",
    },
    {
      label: "Last 6 Months",
      activeRange: "medium",
    },
    {
      label: "Last 4 Weeks",
      activeRange: "short",
    },
  ];

  useEffect(() => {
    catchErrors(async () => {
      const response = await getTopTracksLong();
      const { items } = await response.json();

      setTopTracks(items);
    })();
  }, []);

  const changeRange = async (range) => {
    setActiveRange(range);
    setTopTracks([]);
    const response = await apiCalls[range];
    const { items } = await response.json();
    setTopTracks(items);
  };

  const amountToShowHandler = () => {
    if (amountToShow > 49) {
      setAmountToShow(5);
    } else setAmountToShow(amountToShow + 5);
  };
  return (
    <>
      <SectionWrapper id="tracks">
        <div className="max-w-6xl mx-auto px-2 md:px-6  pt-10 md:pt-24">
          <div className="w-full  pb-10 select-none flex flex-col md:flex-row items-center justify-between space-y-2 pr-4">
            <div>
              <p className="text-2xl font-semibold">Top Tracks</p>
            </div>
            <div className="flex items-center justify-center space-x-4">
              {types.map((type) => (
                <p
                  key={type.activeRange}
                  onClick={() => catchErrors(changeRange(type.activeRange))}
                  className={`${
                    activeRange === type.activeRange
                      ? "border-matt-textdark dark:border-white"
                      : "border-transparent"
                  } border-b cursor-pointer`}
                >
                  {type.label}
                </p>
              ))}
            </div>
          </div>
          {topTracks.length ? (
            <div className="flex flex-col gap-4 no-scrollbar  mb-[100px]">
              {topTracks.map(
                (track, index) =>
                  index < amountToShow && <Track key={track.id} track={track} />
              )}
              <p
                onClick={() => amountToShowHandler()}
                className="text-center text-matt-orange text-xs sm:text-base md:text-lg cursor-pointer"
              >
                {amountToShow >= 49 ? "Show Less" : "Show More"}
              </p>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
