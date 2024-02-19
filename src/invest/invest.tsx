import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer'
import ContactHero from '../components/contactHero'
import Animation from "../components/transitions/Animation"

const Invest: React.FC = () => {
  return (
    <main>
      <Navbar />
      <div className="text-primary">
        <section className="sticky top-0 grid grid-cols-1 gap-1 h-screen py-24 px-10 object-fit text-center md:text-right">
          <img
            src="/images/ronda-cliff.jpeg"
            alt="Background Image"
            className="relative top-0"
          />
        </section>

        <section className="relative bg-light-blue">
          <div className="relative m-0 h-4 bg-primary"> </div>
          <div className="py-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
            {/**<Animation delay={500} x="left" y="center">**/}
              <h1 className="text-5xl md:text-7xl font-zesta-bold">
                Why choose Marbella?
              </h1>
            {/**</Animation>**/}

            {/**<Animation delay={500} x="right" y="center">**/}
              <p className="py-2 text-xl font-zesta-regular">
                <br />
                Investing in Marbella is a smart move for its stunning location, strong rental potential, and stable economy. This coastal gem on the Costa del Sol offers a diverse range of properties and favorable tax incentives, making it an attractive destination for both lifestyle and financial gains.
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
            <h1 className="pt-[2rem] text-4xl md:text-6xl font-zesta-bold text-left"> A long term commitment to a bright future</h1>
            <p className="pt-[2rem]"> Investing in Marbella is a pledge to a brilliant future. With its enduring sunshine, economic vitality, and enviable lifestyle, Marbella offers a long-term commitment to both financial security and a high-quality life.</p>
          </div>
        </section>

        <section className="relative bg-light-blue font-zesta-regular">
          <div className="relative flex flex-col space-y-[2rem] pt-[2rem] pb-[4rem] md:h-[115rem] md:w-[55rem] mx-[2rem] md:mx-auto">
            {/**<Animation delay={400} x="left" y="center">**/}
              <img
                className="static md:absolute self-center md:inset-y-[15rem] md:-left-[4rem] rounded-lg"
                src="/images/jardin-estepona.jpg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={200} x="right" y="center">**/}
              <div className="static md:absolute md:inset-y-[3rem] md:-right-[2rem] p-[1rem] md:h-[13rem] md:w-[45rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={300} x="right" y="center"> **/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">Marbella's Luxurious Lifestyle</h1>
                {/**</Animation>**/}

                {/**<Animation delay={300} x="right" y="center"> **/}
                  <p>
                    Marbella's lifestyle is a harmonious blend of luxury, leisure, and year-round outdoor enjoyment. With pristine beaches, gourmet dining, high-end shopping, and a vibrant cultural scene, it's a place where every day feels like a vacation.
                  </p>
                {/**</Animation>**/}
              </div>
            {/**</Animation>**/}

            {/**<Animation delay={1200} x="left" y="center">**/}
              <img
                className="static md:absolute self-center md:inset-y-[44rem] md:-right-[5rem] rounded-lg"
                src="/images/CaC-03.jpeg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={1000} x="right" y="center">**/}
              <div className="static md:absolute md:inset-y-[35rem] md:right-[2rem] p-[1rem] md:h-[16rem] md:w-[40rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={300} x="right" y="center"> **/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">Securing Your Legacy</h1>
                {/**</Animation>**/}

                {/**<Animation delay={300} x="right" y="center"> **/}
                  <p>
                    Inheritance is more than assets; it's a legacy of security and values. Effective estate planning and the thoughtful distribution of assets can help minimize tax liabilities and legal complexities, allowing your loved ones to inherit your legacy with ease. It's an essential aspect of financial planning that offers peace of mind and a lasting impact on generations to come.
                  </p>
                {/**</Animation>**/}
              </div>
            {/**</Animation>**/}

            {/**<Animation delay={1800} x="left" y="center">**/}
              <img
                className="static md:absolute self-center md:inset-y-[67rem] md:-left-[4rem] rounded-lg"
                src="/images/sea-malaga.jpeg"
                alt="Background Image"
              />
            {/**</Animation>**/}

            {/**<Animation delay={1500} x="right" y="center">**/}
              <div className="static md:absolute md:inset-y-[60rem] md:right-[2rem] p-[1rem] md:h-[16rem] md:w-[42rem] md:bg-light-blue text-xl rounded-lg">
                {/**<Animation delay={300} x="right" y="center"> **/}
                  <h1 className="text-3xl font-zesta-bold pb-[1rem]">The Art of Investment</h1>
                {/**</Animation>**/}

                {/**<Animation delay={300} x="right" y="center"> **/}
                  <p> Journey into the world of culture, aesthetics, and potential growth. <br /> Art not only has the potential to appreciate in value over time but also offers the unique opportunity to surround yourself with beauty and creativity. Blend financial potential with cultural enrichment and diversify your portfolio and add a touch of sophistication to your wealth management. </p>
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
export default Invest;

