import Animation from "../components/transitions/Animation"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer'
import ContactHero from '../components/contactHero'

const Sell: React.FC = () => {
  return (
    <main>
      <Navbar />

      <div className="text-primary">
        <section className="sticky top-0 grid grid-cols-1 gap-1 h-screen py-24 px-10 object-fit text-center md:text-right">
          <img
            src="/images/puerto-banus-peer.jpeg"
            alt="Background Image"
          />
        </section>

        <div className="relative h-4 bg-primary"> </div>

        <section className="relative bg-light-blue">
          <div className="py-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
            {/**<Animation delay={500} x="left" y="center">**/}
              <h1 className=" text-6xl md:text-8xl font-zesta-bold ">
                Find your perfect match 
              </h1>
            {/**</Animation>**/}

            {/**<Animation delay={500} x="right" y="center">**/}
              <p className="py-2 text-xl font-zesta-regular">
                <br />
                With our vast network, industry expertise, and unwavering commitment, we're not just selling properties; we're finding your perfect match. Our dedicated team works tirelessly to showcase your property in the best light, reaching the right audience and ensuring a seamless selling process. Your property is unique, and so is our approach. Trust us to connect you with the ideal buyer and make your selling experience not just successful but truly remarkable. At <span className="font-zesta-bold"> Legal Boutique Advisers </span>, finding your perfect match is our promise, and we're here to deliver it."
              </p>
            {/**</Animation>**/}
          </div> 
          <div className="relative m-0 h-4 bg-primary"> </div>
        </section>

        <div className="sticky top-0 h-screen">
          <img
            src="/images/modern-villa.jpeg"
            alt="Background Image"
          />
        </div>

        <section className="relative bg-light-blue">
          <div className="m-0 h-4 bg-primary"> </div>
          <div className="md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify text-xl font-zesta-regular">
            <h1 className="pt-[4rem] text-6xl md:text-7xl font-zesta-bold md:text-left"> Sell with Confidence </h1>
            <p className="pt-[2rem]">Explore the possibilities, discover the potential, and embark on a seamless selling experience with us. Whether you're a seasoned seller or a first-time lister, our comprehensive resources, and expert guidance will empower you to make the most of your property. </p>
          </div>
        </section>

        <section className="relative bg-light-blue font-zesta-regular">
          <div className="relative flex flex-col space-y-[2rem] pt-[2rem] md:pt-0 pb-[4rem] md:h-[120rem] md:w-[55rem] mx-[2rem] md:mx-auto">
            {/**<Animation delay={500} x="right" y="center">**/}
              <img
                className="static md:absolute md:inset-y-[10rem] md:right-[2rem] rounded-lg"
                src="/images/malaga-road.jpeg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={500} x="left" y="center">**/}
              <div className="static md:absolute md:inset-y-[5rem] md:-left-[2rem] p-[1rem] md:h-[15rem] md:w-[40rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={800} x="left" y="center">**/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">Market Fit</h1>
                {/**</Animation>**/}
                {/**<Animation delay={800} x="left" y="center">**/}
                  <p> Market fit is the magic sweet spot where our offerings perfectly meet your needs, delivering value that matters most to you. At Legal Boutique Advisers, we're relentlessly focused on achieving this synergy to ensure our products and services are indispensable to you.
                  </p>
                {/**</Animation>**/}
              </div>
            {/**</Animation>**/}

            {/**<Animation delay={900} x="center" y="down">**/}
              <img
                className="static md:absolute self-center md:inset-y-[46rem] md:-left-[5rem] rounded-lg"
                src="/images/modern-house.jpeg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={1000} x="left" y="center">**/}
              <div className="static md:absolute md:inset-y-[32rem] md:left-[2rem] p-[1rem] md:h-[16rem] md:w-[40rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={1200} x="left" y="center">**/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">Tax Advice</h1>
                {/**</Animation>**/}
                {/**<Animation delay={800} x="left" y="center">**/}
                  <p>
                  Tax advice is the compass that guides you through the complex landscape of financial decisions. It's about maximizing your savings while staying compliant with ever-changing tax laws. We help you navigate the intricacies of tax planning, ensuring your financial goals are met efficiently and legally. Let us be your trusted partner in making smart tax decisions.
                  </p>
                {/**</Animation>**/}
              </div>
            {/**</Animation>**/}

            {/**<Animation delay={1500} x="right" y="center">**/}
              <img
                className="static md:absolute self-center md:inset-y-[68rem] md:-right-[4rem] rounded-lg"
                src="/images/plaza-españa-sevilla.jpeg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={1800} x="left" y="center">**/}
              <div className="static md:absolute md:inset-y-[65rem] md:left-[2rem] p-[1rem] md:h-[15rem] md:w-[40rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={2000} x="left" y="center">**/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">
                    Simplifying Your Paperwork Burden
                  </h1>
                {/**</Animation>**/}

                {/**<Animation delay={300} x="left" y="center">**/}
                  <p>
                    We understand the challenges of managing extensive documentation. Our streamlined solutions and expert assistance make complex paperwork effortless, allowing you to focus on what truly matters in your life or business. Experience the convenience of simplified paperwork management with us.
                  </p>
                {/**</Animation>**/}
              </div>
            {/**</Animation>**/}
          </div>
        </section>
      </div>
      <ContactHero />
      <Footer />
    </main>
  );
}
export default Sell;

