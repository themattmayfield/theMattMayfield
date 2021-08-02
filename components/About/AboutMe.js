import SectionWrapper from "../Layouts/SectionWrapper";
import Image from "next/image";

import { FaGithub, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Socials = [
  {
    name: "Github",
    path: "https://github.com/theMattMayfield",
    icon: <FaGithub className="w-7 h-7" />,
    id: 0,
  },
  {
    name: "Instagram",
    path: "https://instagram.com/theMattMayfield",
    icon: <FaInstagram className="w-7 h-7" />,
    id: 2,
  },
  {
    name: "Youtube",
    path: "https://youtube.com/theMattMayfield",
    icon: <FaYoutube className="w-7 h-7" />,
    id: 3,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/theMattMayfield",
    icon: <FaTwitter className="w-7 h-7" />,
    id: 4,
  },
];

export default function AboutMe() {
  return (
    <>
      <SectionWrapper id="about" title="">
        <div className="mt-4 mb-20 lg:mt-12 flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:px-6 space-y-10 lg:space-y-0 lg:space-x-12">
          <div className="w-60 sm:w-72 md:w-full text-center lg:text-left">
            <Image
              src="/me.png"
              alt="Picture of the author"
              width={350}
              height={350}
            />
          </div>

          <div className="max-w-2xl text-center">
            <h2 className="text-yellow-900 uppercase w-full text-center text-base sm:text-2xl lg:text-4xl font-bold tracking-wide mb-6">
              About Me
            </h2>

            <p className="mb-8 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex items-center justify-center space-x-8">
              {Socials.map((social, i) => (
                <a
                  key={social.id}
                  className="no-underline rounded-full w-12 h-12 cursor-pointer flex items-center justify-center my-0"
                  rel="noreferrer"
                  target="_blank"
                  aria-label={social.name}
                  href={social.path}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
