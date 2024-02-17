import { useState } from 'react';
import NavItem from "./NavItem";

const MENU_LIST = [
  {text: "Home", href: "#"},
  { text: "Buy", href: "/buy" },
  { text: "Sell", href: "/sell" },
  { text: "Invest", href: "/invest" },
  { text: "About", href: "/aboutus" },
  { text: "Contact", href: "/contactus" },
];

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
       <nav className="sticky top-0 z-30 w-full bg-light-blue bg-opacity-90 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#" className="hidden md:block text-2xl text-primary font-zesta-bold visible">
                Legal Boutique Advisers 
              </a>
              <a href="#" className="block md:hidden text-2xl text-primary font-zesta-bold visible">
                L-B-A
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-primary focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-[3rem] md:space-y-0">
                {MENU_LIST.map((menu) => (
                  <div key={menu.text}>
                    <NavItem {...menu} />
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
