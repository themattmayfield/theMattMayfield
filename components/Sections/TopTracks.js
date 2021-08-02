import React, { useState, useEffect } from "react";

import SectionWrapper from "../Layouts/SectionWrapper";
import Loading from "../UI/Loading";
import Track from "../Tracks/Track";
import axios from "axios";
import { catchErrors } from "../../utils";

const classes = {
  active: "border-b border-white",
  inactive: "border-b border-transparent",
};

export default function Tracks() {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("long");
  const [amountToShow, setAmountToShow] = useState(5);

  const apiCalls = async (range) => {
    if (range == "long") {
      const { data } = await axios.get("/api/top-tracks-long");
      return data;
    }
    if (range == "medium") {
      const { data } = await axios.get("/api/top-tracks-medium");
      return data;
    }
    if (range == "short") {
      const { data } = await axios.get("/api/top-tracks-short");
      return data;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/top-tracks-long");
      // console.log(data);
      setTopTracks(data.items);
    };
    catchErrors(fetchData());
  }, []);

  const changeRange = async (range) => {
    const data = await apiCalls(range);
    setTopTracks(data.items);
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
          <div className="w-full text-white pb-10 select-none flex flex-col md:flex-row items-center justify-between space-y-2 pr-4">
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
            <div className="flex flex-col gap-4 no-scrollbar text-white mb-[100px]">
              {topTracks.map(
                (track, index) =>
                  index < amountToShow && <Track key={index} track={track} />
              )}
              <p
                onClick={() => amountToShowHandler()}
                class="text-center text-yellow-900 text-lg cursor-pointer"
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
