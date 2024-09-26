'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';
import portfolioItems, { type TPortfolioItems } from '@/lib/portfolioItems';
import { useTheme } from 'next-themes';
import PortfolioItemModal from '@/components/PortfolioItemModal';
import { BsFillGrid1X2Fill, BsViewList } from 'react-icons/bs';

export default function Portfolio() {
  const { systemTheme, theme } = useTheme();
  const [activeItem, setActiveItem] = useState<TPortfolioItems[number] | null>(
    null
  );
  const [isList, setList] = useState(true);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const imageSrc = (item: TPortfolioItems[number]) => {
    if (currentTheme === 'dark' && item.id === 4) {
      return '/heroLight.png';
    }
    return item.ImagePath;
  };

  return (
    <SectionWrapper id="portfolio">
      <div className="flex items-center relative justify-center mb-4 sm:mb-6">
        <h2 className=" text-matt-orange uppercase text-center text-base sm:text-2xl lg:text-4xl font-bold tracking-wide">
          Check out what I've been up to!
        </h2>
        <div className="text-white hidden lg:flex items-center space-x-3 absolute right-0">
          <BsViewList
            onClick={() => setList(true)}
            className={`${
              isList
                ? 'text-matt-orange hover:bg-opacity-70'
                : 'text-matt-textdark dark:text-white hover:text-matt-orange'
            } cursor-pointer transition duration-300 ease-in-out`}
            size={20}
          />
          <BsFillGrid1X2Fill
            onClick={() => setList(false)}
            className={`${
              !isList
                ? 'text-matt-orange hover:bg-opacity-70'
                : 'text-matt-textdark dark:text-white hover:text-matt-orange'
            } cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out`}
            size={20}
          />
        </div>
      </div>

      <div className="mt-12 flex lg:hidden items-center justify-between w-full overflow-x-auto space-x-12">
        {portfolioItems.map((item) => (
          <div key={item.id} className="flex-shrink-0">
            <img
              alt={item.name}
              onClick={() => setActiveItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setActiveItem(item);
                }
              }}
              className="h-64 w-auto object-contain cursor-pointer"
              src={imageSrc(item)}
            />
          </div>
        ))}
      </div>

      <div>
        {isList ? (
          <div className="mt-12 hidden lg:flex items-center justify-between w-full overflow-scroll space-x-12">
            {portfolioItems.map((item) => (
              <img
                alt={item.name}
                key={item.id}
                onClick={() => setActiveItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setActiveItem(item);
                  }
                }}
                className="h-64 w-auto cursor-pointer"
                src={imageSrc(item)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 w-full hidden lg:grid grid-cols-1 xs:grid-cols-2 gap-y-6">
            {portfolioItems.map((item) => (
              <div className="flex items-center justify-center" key={item.id}>
                <img
                  alt={item.name}
                  onClick={() => setActiveItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setActiveItem(item);
                    }
                  }}
                  className="h-64 w-auto cursor-pointer"
                  src={imageSrc(item)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <PortfolioItemModal
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </SectionWrapper>
  );
}
