'use client';
import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import Track from './Track';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

const motions = [
  {
    animate: {
      transform: [
        'scaleY(1.0) translateY(0rem)',
        'scaleY(1.5) translateY(-0.082rem)',
        'scaleY(1.0) translateY(0rem)',
      ],
    },
    transition: { duration: 1, repeat: 'Infinity' },
  },
  {
    animate: {
      transform: [
        'scaleY(1.0) translateY(0rem)',
        'scaleY(3) translateY(-0.083rem)',
        'scaleY(1.0) translateY(0rem)',
      ],
    },
    transition: { delay: 0.2, duration: 1.5, repeat: 'Infinity' },
  },
  {
    animate: {
      transform: [
        'scaleY(1.0)  translateY(0rem)',
        'scaleY(0.5) translateY(0.37rem)',
        'scaleY(1.0)  translateY(0rem)',
      ],
    },
    transition: { delay: 0.3, duration: 1.5, repeat: 'Infinity' },
  },
];

function AnimatedBars() {
  return (
    <div className="flex justify-center items-center w-full h-[90vh]">
      <div className="flex justify-center items-end space-x-[3px] overflow-hidden w-[100px] min-w-[100px] h-[50px] my-0 mx-auto z-20 relative left-0 right-0">
        {motions.map((bar, index) => (
          <motion.span
            key={index}
            animate={bar.animate}
            style={{ backgroundColor: 'rgba(27, 27, 27, 1)' }}
            className="w-2.5 h-5 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

type range = 'long' | 'medium' | 'short';

export default function Tracks({
  shortTracks,
  mediumTracks,
  longTracks,
}: { shortTracks: any; mediumTracks: any; longTracks: any }) {
  const [topTracks, setTopTracks] = useState(longTracks);
  const [activeRange, setActiveRange] = useState('long');
  const [amountToShow, setAmountToShow] = useState(5);

  const apiCalls = {
    long: longTracks,
    medium: mediumTracks,
    short: shortTracks,
  };

  const types = [
    {
      label: 'All Time',
      activeRange: 'long',
    },
    {
      label: 'Last 6 Months',
      activeRange: 'medium',
    },
    {
      label: 'Last 4 Weeks',
      activeRange: 'short',
    },
  ] as const;

  const changeRange = async (range: range) => {
    setActiveRange(range);
    setTopTracks(apiCalls[range]);
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
                  onClick={() => changeRange(type.activeRange)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      changeRange(type.activeRange);
                    }
                  }}
                  className={cn(
                    'border-b cursor-pointer',
                    activeRange === type.activeRange
                      ? 'border-matt-orange'
                      : 'border-transparent'
                  )}
                >
                  {type.label}
                </p>
              ))}
            </div>
          </div>
          {topTracks ? (
            <div className="flex flex-col gap-4 no-scrollbar  mb-[100px]">
              {topTracks.map(
                (track: any, index: number) =>
                  index < amountToShow && <Track key={track.id} track={track} />
              )}
              <p
                onClick={() => amountToShowHandler()}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    amountToShowHandler();
                  }
                }}
                className="text-center text-matt-orange text-xs sm:text-base md:text-lg cursor-pointer"
              >
                {amountToShow >= 49 ? 'Show Less' : 'Show More'}
              </p>
            </div>
          ) : (
            <AnimatedBars />
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
