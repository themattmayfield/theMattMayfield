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
    <SectionWrapper id="portfolio" title="Check out what I've been up to!">
      <div class="mt-12 flex items-center justify-between w-full overflow-scroll space-x-12 no-scrollbar">
        {Items.map((item, i) => (
          <>
            <Link
              key={item.id}
              href={item.url}
              className="w-full overflow-scroll"
            >
              <img
                className="h-64 w-auto cursor-pointer"
                src={
                  darkMode.value && i == 3 ? "/heroLight.png" : item.ImagePath
                }
              />
            </Link>
          </>
        ))}
      </div>
    </SectionWrapper>
  );
  //     return (
  //         <SectionWrapper id="portfolio" title="Check out what I've been up to!" >
  //            <div className="mx-auto flex flex-wrap justify-center items-center">
  //                 {Items.map((item, i) => (
  // /* <img className="h-64 transition duration-500 ease-in-out opacity-50 hover:opacity-100 cursor-pointer"  src={item.ImagePath} alt={item.alt} /> */
  // <div className="w-64 h-64 bg-matt-orange mr-3 mb-3">
  //     </div>
  //             ))}
  //             </div>
  //         </SectionWrapper>
  //     )
  // return (
  //   <SectionWrapper id="portfolio" title="Check out what I've been up to!">
  //     <div class="mt-12">
  //       {Items.map((item, i) => (
  //         <>
  //           <div
  //             className={
  //               " " + (i == Items.length - 1 ? "mb-0" : "mb-20 lg:mb-40")
  //             }
  //           >
  //             <PortfolioItems
  //               tech={item.tech}
  //               ImagePath={item.ImagePath}
  //               title={item.title}
  //               alt={item.alt}
  //               filler={item.filler}
  //               index={i}
  //             />
  //           </div>
  //         </>
  //       ))}
  //     </div>
  //   </SectionWrapper>
  // );
}
