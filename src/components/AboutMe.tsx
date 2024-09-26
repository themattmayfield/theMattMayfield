import SectionWrapper from '@/components/SectionWrapper';
import socials from '@/utils/socials';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <>
      <SectionWrapper id="about">
        <div className="sm:mt-4 mb-20 lg:mt-12 flex flex-col lg:flex-row items-center lg:justify-between justify-center lg:px-6 space-y-10 lg:space-y-0 lg:space-x-12">
          <div className="w-40 sm:w-72 md:w-full text-center lg:text-left">
            <Image
              src="/me.png"
              alt="Picture of the author"
              width={350}
              height={350}
            />
          </div>

          <div className="max-w-2xl text-center">
            <h2 className="text-matt-orange uppercase w-full text-center text-base sm:text-2xl lg:text-4xl font-bold tracking-wide mb-4 sm:mb-6">
              About Me
            </h2>

            <div className="text-sm sm:text-lg space-y-3 sm:space-y-4 mb-4 sm:mb-8">
              <p>
                Hello 👋🏿 , I'm Matthew! I am a software developer 👨🏿‍💻 ,
                fitness enthusiast 💪🏿 , coffee connoisseur ☕ , and positivity
                spreader 💖 .{' '}
              </p>
              <p>
                As soon as I printed "Hello World" for the first time 😲, I fell
                in love with developing. Years ago, I became obsessed with doing
                Project Euler problems 🧮, which helped shape my problem-solving
                skills and intuitiveness 💡.{' '}
              </p>
              <p>
                Later on, I got into web development and started creating simple
                web pages with no frameworks 🤭 ! Fast forward a few more years,
                and now I have created hundreds of web apps for different
                companies using React and love it more and more each day ✨.{' '}
              </p>
              <p>
                I love being outdoors 🤭 , improving my overall health and
                wellness 🚴🏿‍♂️ , making coffee ♨️, and spending time with my
                loved ones in my free time 💝!
              </p>
            </div>

            <div className="flex items-center justify-center space-x-8">
              {socials.map((social) => (
                <a
                  key={social.id}
                  className="no-underline rounded-full w-12 h-12 cursor-pointer flex items-center justify-center my-0 text-[28px]"
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
