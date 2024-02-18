import { Transition } from '@headlessui/react';
import { useInView } from 'react-intersection-observer'
import ButtonItem from './components/buttonItem' 
import { useState } from 'react';

const LandingPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const staggerDelay = 1000; // Adjust the delay as needed for the staggered effect
  const [phone, setPhone] = useState(false);

  return (
    <div className="relative top-0 grid grid-cols-1 gap-1 h-screen object-fill text-center text-primary md:text-right">
      <img
        src="/images/puerto-banus-la-concha.jpeg"
        alt="la-Concha"
        className="absolute z-[-1] md:opacity-100 md:h-full overflow-hidden"
      />

      <div
        ref={ref}
        className= "static md:absolute md:inset-y-[6rem] md:right-[10rem] text-center md:text-right flex flex-col py-[2rem] md:w-[45rem] mx-[2rem] md:mx-auto"
      >
        <Transition
          show={inView}
          enter={`transition-transform duration-1000 ease-in-out ${staggerDelay}ms`}
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave={`transition-transform duration-1000 ease-in-out ${staggerDelay}ms`}
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="font-zesta-regular text-3xl mb-2"
        >
          Welcome to
          <span className="visible md:hidden">
            <br />
          </span>
          <span className="font-zesta-bold"> Legal Boutique Advisers</span>
        </Transition>

        <Transition
          show={inView}
          enter={`transition-transform duration-1000 ease-in-out ${staggerDelay * 4}ms`}
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave={`transition-transform duration-1000 ease-in-out ${staggerDelay * 4}ms`}
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="font-zesta-regular text-6xl mb-4 tracking-tighter"
        >
          Draw Your Dream Home
        </Transition>

        <Transition
          show={inView}
          enter={`transition-transform duration-1000 ease-in-out ${staggerDelay * 3}ms`}
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave={`transition-transform duration-1000 ease-in-out ${staggerDelay * 3}ms`}
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className="hidden md:visible text-primary text-2xl font-zesta-regular md:mt-1"
        >
          With our extensive listings and experienced agents, <br />
          your perfect property is just a search away.
        </Transition>

        <Transition
          as="div"
          show={inView}
          enter={`transition-transform duration-1000 ease-in-out ${staggerDelay * 4}ms`}
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave={`transition-transform duration-1000 ease-in-out ${staggerDelay * 4}ms`}
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-full"
          className="flex flex-col md:flex-row-reverse items-center mt-5 md:mt-8 gap-[1.5rem] md:gap-[2rem]"
        >
          <ButtonItem
            href="./contactus"
            className="w-[15rem] h-[3rem]"
            text="Contact Us"
            theme="light"
          />

          <ButtonItem
            href="./aboutus"
            className="w-[15rem] h-[3rem]"
            text="Learn more"
            theme="light"
          />
        </Transition>
      </div>
    </div>
  );
}

export default LandingPage;

