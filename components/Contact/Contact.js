import SectionWrapper from "components/Layouts/SectionWrapper";
import Socials from "components/Socials";
import { BsCalendar } from "react-icons/bs";

export default function AboutMe() {
  return (
    <>
      <SectionWrapper id="contact">
        <h2 className="text-matt-orange uppercase w-full text-center text-base sm:text-2xl lg:text-4xl font-bold tracking-wide mb-4 sm:mb-6">
          Get In Touch
        </h2>
        <div className="text-center w-full items-center mt-6 mb-20">
          <p className="mb-12 max-w-xl mx-auto text-base lg:text-lg">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="flex items-center space-x-4 justify-center mb-16">
            <Button className="bg-matt-orange">
              Say Hi<span className="ml-2">👋🏿</span>
            </Button>

            <Button>
              Schedule a Meeting
              <BsCalendar className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <Socials />
        </div>
      </SectionWrapper>
    </>
  );
}

const Button = ({ children, className }) => {
  return (
    <button
      className={`
        px-4 py-2 md:py-4 md:px-8 border border-matt-orange rounded flex items-center focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
