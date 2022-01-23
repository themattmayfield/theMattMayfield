import SectionWrapper from "../Layouts/SectionWrapper";
import _ from "lodash";
import { Items } from "./ItemObject";
import { useRouter } from "next/router";
import useDarkMode from "use-dark-mode";
import Link from "next/link";
export default function Portfolio() {
  const router = useRouter();
  const darkMode = useDarkMode();

  return (
    <SectionWrapper id="portfolio">
      <h2 className="text-matt-orange uppercase w-full text-center text-base sm:text-2xl lg:text-4xl font-bold tracking-wide mb-4 sm:mb-6">
        Check out what I've been up to!
      </h2>
      <div className="mt-12 flex items-center justify-between w-full overflow-scroll space-x-12 no-scrollbar">
        {Items.map((item, i) => (
          <Link
            key={item.id}
            href={item.url}
            className="w-full overflow-scroll"
          >
            <img
              className="h-64 w-auto cursor-pointer"
              src={darkMode.value && i == 3 ? "/heroLight.png" : item.ImagePath}
            />
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
