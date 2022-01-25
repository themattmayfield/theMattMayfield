import { useState, useEffect } from "react";
import SectionWrapper from "components/SectionWrapper";
import _ from "lodash";
import portfolioItems from "../lib/portfolioItems";
import { useTheme } from "next-themes";
import PortfolioItemModal from "components/PortfolioItemModal";
import { BsFillGrid1X2Fill, BsViewList } from "react-icons/bs";

export default function Portfolio() {
  const { systemTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isList, setList] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

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
                ? "text-matt-orange hover:bg-opacity-70"
                : "text-white hover:text-matt-orange"
            } cursor-pointer transition duration-300 ease-in-out`}
            size={20}
          />
          <BsFillGrid1X2Fill
            onClick={() => setList(false)}
            className={`${
              !isList
                ? "text-matt-orange hover:bg-opacity-70"
                : "text-white hover:text-matt-orange"
            } cursor-pointer hover:text-matt-orange transition duration-300 ease-in-out`}
            size={20}
          />
        </div>
      </div>

      <div className="mt-12 flex lg:hidden items-center justify-between w-full overflow-scroll space-x-12">
        {portfolioItems.map((item) => (
          <img
            key={item.id}
            onClick={() => setActiveItem(item)}
            className="h-64 w-auto cursor-pointer"
            src={
              currentTheme === "dark" && item.id == 3
                ? "/heroLight.png"
                : item.ImagePath
            }
          />
        ))}
      </div>

      <div>
        {isList ? (
          <div className="mt-12 hidden lg:flex items-center justify-between w-full overflow-scroll space-x-12">
            {portfolioItems.map((item) => (
              <img
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="h-64 w-auto cursor-pointer"
                src={
                  currentTheme === "dark" && item.id == 3
                    ? "/heroLight.png"
                    : item.ImagePath
                }
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 w-full hidden lg:grid grid-cols-1 xs:grid-cols-2 gap-y-6">
            {portfolioItems.map((item) => (
              <div className="flex items-center justify-center">
                <img
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="h-64 w-auto cursor-pointer"
                  src={
                    currentTheme === "dark" && item.id == 3
                      ? "/heroLight.png"
                      : item.ImagePath
                  }
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
