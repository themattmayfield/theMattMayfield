import SectionWrapper from "../Layouts/SectionWrapper";
import Socials from "../UI/Socials";
import styled from "styled-components";
import { BsCalendar } from "react-icons/bs";

export const Button = ({ children, ...props }) => {
  return (
    <button
      className={
        "py-4 px-8 border border-yellow-900 rounded flex items-center " +
        props.class
      }
    >
      {children}
    </button>
  );
};

export default function AboutMe(props) {
  return (
    <>
      <SectionWrapper id="contact" title="Get In Touch">
        <div className="text-center w-full items-center mt-6">
          <p className="mb-12 max-w-xl mx-auto text-lg">
            Although I'm not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I'll try my best to get back to you!
          </p>

          <div className="flex items-center space-x-4 justify-center mb-16">
            <Button class="bg-yellow-900 text-white">
              Say Hi<span class="ml-2">👋🏿</span>
            </Button>

            <Button>
              Schedule a Meeting
              <BsCalendar className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        <Socials />
      </SectionWrapper>
    </>
  );
}
