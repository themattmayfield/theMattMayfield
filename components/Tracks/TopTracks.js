import React, { useState, useEffect } from "react";

import SectionWrapper from "../Layouts/SectionWrapper";
import Loading from "../UI/Loading";
import Track from "./Track";
import { catchErrors } from "../../utils";
import {
  getTopTracksLong,
  getTopTracksMedium,
  getTopTracksShort,
} from "../../utils/spotify";

const classes = {
  active: "border-b border-matt-textdark dark:border-white",
  inactive: "border-b border-transparent",
};

export default function Tracks() {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("long");
  const [amountToShow, setAmountToShow] = useState(5);

  const apiCalls = {
    long: getTopTracksLong(),
    medium: getTopTracksMedium(),
    short: getTopTracksShort(),
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTopTracksLong();
      const { items } = await response.json();

      setTopTracks(items);
    };
    catchErrors(fetchData());
  }, []);

  const changeRange = async (range) => {
    const response = await apiCalls[range];
    const { items } = await response.json();
    setTopTracks(items);
    setActiveRange(range);
  };

  const setRangeData = (range) => catchErrors(changeRange(range));

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
              <p
                onClick={() => setRangeData("long")}
                className={
                  "cursor-pointer " +
                  (activeRange == "long" ? classes.active : classes.inactive)
                }
              >
                All Time
              </p>
              <p
                onClick={() => setRangeData("medium")}
                className={
                  "cursor-pointer " +
                  (activeRange == "medium" ? classes.active : classes.inactive)
                }
              >
                Last 6 Months
              </p>
              <p
                onClick={() => setRangeData("short")}
                className={
                  "cursor-pointer " +
                  (activeRange == "short" ? classes.active : classes.inactive)
                }
              >
                Last 4 Weeks
              </p>
            </div>
          </div>
          {topTracks ? (
            <div className="flex flex-col gap-4 no-scrollbar  mb-[100px]">
              {topTracks.map(
                (track, index) =>
                  index < amountToShow && <Track key={index} track={track} />
              )}
              <p
                onClick={() => amountToShowHandler()}
                class="text-center text-matt-orange text-xs sm:text-base md:text-lg cursor-pointer"
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
