import Button from "@mui/material/Button";
import Animation from '../components/transitions/Animation'

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer';

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="relative text-primary">
        <section className="sticky top-0 grid grid-cols-1 gap-1 h-screen py-24 px-10 object-fill text-center md:text-right">
          <img
            src="/images/golf-course.jpeg"
            alt="Background Image"
          />
        </section>

        <section className="relative bg-light-blue">
          <div className="h-4 bg-primary"> </div>
          <div className="py-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
          {/**<Animation delay={400} x="left" y="center">**/}
            <h1 className="text-6xl md:text-8xl font-zesta-bold">
              Who are we?
            </h1>
          {/**</Animation>**/}
          {/**<Animation delay={800} x="left" y="center">**/}
            <p className="py-2 text-xl font-zesta-regular">
              With a wealth of <span className="font-zesta-black">expertise</span> and an extensive understanding of the real estate landscape, we are a team adept at crafting meticulous comparative assessments. We are <span className="font-zesta-black">commited</span> to proactively identify and mitigate potential challenges that might emerge, all while delivering comprehensive <span className="font-zesta-black">legal and tax guidance.</span>
            </p>
          {/**</Animation>**/}
          </div>
          <div className="m-0 h-4 bg-primary"> </div>
        </section>


        <section className="relative bg-light-blue">
          <div className="flex flex-col py-[2rem] md:w-[55rem] mx-[2rem] md:mx-auto md:text-justify">
            {/**<Animation delay={800} x="left" y="center">**/}
              <img
                src="/images/office-interior.jpeg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Office Interior"
                className="static pt-8"
              />
            {/**</Animation>**/}

            {/**<Animation delay={800} x="left" y="center">**/}
              <p className="text-xl font-zesta-regular">
                As you embark on your <span className="font-zesta-bold">investment journey</span> in Spain, whether seeking a vacation haven, exploring corporate avenues, or engaging with investment portfolios and construction ventures, we extend a comprehensive suite of services. From <span className="font-zesta-bold">property search</span> to expertly guiding you towards the optimal legal structure to minimize fiscal impact on your investment, we stand by your side until the journey's culmination, providing an <span className="font-zesta-bold">end-to-end "turnkey" solution</span> in all matters pertaining to Real Estate Law.
              </p>
            {/**</Animation>**/}
          </div>
        </section>

        <section className="relative bg-light-blue">
          <div className="flex flex-col space-y-[2rem] mx-[2rem] py-[2rem] md:pt-[2rem] md:w-[55rem] md:h-[65rem] md:mx-auto">
            <div className="static md:absolute p-[1rem] md:ml-[4rem] md:mt-[4rem] md:w-[30rem] bg-light-blue text-left md:text-justify">
              <h1 className="text-3xl font-zesta-bold p-4">
                An <span className="font-zesta-black"> attentive </span> relation
              </h1>
              <p className="text-xl font-zesta-regular pl-4 pr-8">
                We are a law and tax firm who offers legal advice, at national and international level, without the language being an obstacle.
              </p>
            </div>

            <div className="md:pb-[12rem] md:pt-[8rem]">
              <img
                src="/images/malaga-landscape.jpeg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt="Office Interior"
              />
            </div>

            <div className="static md:absolute md:self-end md:bottom-[4rem] p-[1rem] md:mr-[2rem] mb-[2rem] md:mb-[10rem] md:w-[40rem] bg-light-blue text-left md:text-justify">
              <h1 className="text-3xl font-zesta-bold p-4">
                Providing <span className="font-zesta-black">trust</span>
              </h1>
              <p className="text-xl font-zesta-regular pl-4 pr-8">
                The security of having an expert lawyer in real estate and
                taxes, in situ, allows us to propose a real service of
                accompaniment to companies and individuals, that best suits your
                needs, without wasting time, that allows you to reduce the cost
                of your acquisition.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="relative h-4 bg-primary"> </div>
          <div className="relative h-72 bg-transparent"> </div>
          <div className="relative h-4 bg-primary"> </div>
        </section>

        <section className="relative bg-light-blue">
          <div className="md:grid md:grid-cols-2 md:grid-row-4 md:items-flow md:gap-4 py-8 md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
            <h1 className="col-span-2 text-6xl md:text-8xl font-zesta-bold ">
              The Team
            </h1>
            <p className="py-[2rem] col-span-2 text-xl md:text-2xl font-zesta-italic">
              "We recognize the individuality of our clients, which is why our
              advisory services are meticulously tailored to align with their
              distinctive needs."
            </p>
            <img
              src="/images/Marisela.jpeg"
              alt="Marisela Castro"
            />

            <div className="py-[2rem] md:py-0 font-zesta-regular text-left md:text-justify">
              <h2 className="text-2xl md:text-3xl font-zesta-bold"> MARISELA CASTRO ABAD </h2>
              <b className="text2xl font-zesta-bold"> LAWYER </b>
              <p>
                A graduate in law from the{" "}
                <span className="font-zesta-bold">University of Malaga</span>, I
                have specialized in{" "}
                <span className="font-zesta-bold">European law</span> and hold
                degrees in tax law and accounting. With a diverse professional
                background, I've worked with the{" "}
                <span className="font-zesta-bold">
                  European Commission , and Spanish Bar Delegation
                </span>{" "}
                in Brussels, and esteemed law firms across Spain.
                <br />
                As a member of the Malaga Bar Association and a certified{" "}
                <span className="font-zesta-bold">
                  "Avocat Mandataire in Transactions Immobilières"
                </span>{" "}
                by the AAMTI Association in Paris, I bring a wealth of experience.
                Additionally, I'm associated with the{" "}
                <span className="font-zesta-bold">
                  "Chambre Franco-Espagnole de Commerce et d' Industrie"
                </span>{" "}
                and have furthered my expertise through specialized training such
                as <span className="font-zesta-bold">"Tax in the Arts"</span> at
                the{" "}
                <span className="font-zesta-bold">
                  University Panthéon-Assas Paris 2.
                </span>
                <br />
                My approach revolves around meticulously analyzing each client's
                unique circumstances, providing{" "}
                <span className="font-zesta-bold"> tailored advice</span>, and
                executing decisions that yield optimal solutions. My mission is to
                offer{" "}
                <span className="font-zesta-bold"> tax-efficient strategies</span>{" "}
                that enhance your investments across various domains, including
                real estate, the arts market, and more, even facilitating
                financing when needed. An ardent enthusiast of opera and art, I am
                devoted to engaging and fostering artistic pursuits.
                <br />
              </p>
              <div className="flex pt-[1rem] gap-4 items-center">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  className="flex-initial font-zesta-bold text-l md:text-xl bg-primary md:bg-transparent text-white md:text-primary w-80 h-15 rounded-none pt-2 "
                >
                  <a href="./aboutus">info@mariselacastro.com</a>
                </Button>
                <a
                  href="https://www.linkedin.com/in/marisela-castro-abad-161523136/?locale=en_US"
                  className="flex-initial"
                >
                  <img
                    src="/icons/linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
                <a href="https://www.twitter.com/" className="flex-initial">
                  <img
                    src="/icons/x-twitter.svg"
                    alt="Linkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutUs;
