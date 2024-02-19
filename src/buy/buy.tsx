import Animation from '../components/transitions/Animation'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer'
import ContactHero from '../components/contactHero'

const Buy: React.FC = () => {
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

        <section className="relative bg-light-blue">
          <div className="h-4 bg-primary"> </div>
          <div className="py-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
            <h1 className="text-6xl md:text-8xl font-zesta-bold">
              Why buy with us?
            </h1>
            <p className="py-2 text-xl font-zesta-regular">
              At Legal Boutique Advisers, we're committed to making this journey an extraordinary one for you. Our dedication to finding your dream property goes beyond just bricks and mortar – it's about helping you discover your 
              <span className="font-zesta-bold"> ideal lifestyle </span>
            </p>
          </div>
          <div className="m-0 h-4 bg-primary"> </div>
        </section>

        <div className="sticky top-0 h-screen">
          <img
            src="/images/modern-villa.jpeg"
            alt="Background Image"
          />
        </div>

        <section className="relative h-[30rem] md:h-auto z-20 bg-light-blue">
          <div className="m-0 h-4 bg-primary"> </div>
          {/**<Animation delay={400} x="right" y="center">**/}
            <div className= "md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify text-xl font-zesta-regular">
              <h1 className="pt-[2rem] text-6xl md:text-8xl font-zesta-bold">Our expertise</h1>
              <p className="pt-[2rem]">Having extensive experience in market <span className="font-zesta-bold">research </span> , we have developed a deep understanding of the real estate industry and the factors that influence market <span className="font-zesta-bold">trends </span>. Our skills collecting and analyzing data show us able to translate <span className="font-zesta-bold">complex</span> research findings into actionable insights for our clients.</p>
            </div>
          {/**</Animation>**/}
        </section>

        <section className="relative md:h-xxl z-20 bg-light-blue font-zesta-regular">
          <div className="relative flex flex-col space-y-[2rem] pb-[4rem] md:w-[55rem] mx-[2rem] md:mx-auto">
            {/**<Animation delay={400} x="right" y="center">**/}
              <div className= "static md:absolute md:inset-y-[3rem] md:-right-[2rem] p-[1rem] md:h-[14rem] md:w-[45rem] bg-light-blue/50 md:bg-light-blue text-xl md:rounded-lg">
                <h1 className="text-3xl font-zesta-bold pb-[1rem]">Knowledge comes with experience</h1>
                <p> With an extensive portfolio of properties and a team of experienced, local experts, we offer unparalleled insights into the real estate market. Whether you're a first-time buyer or a seasoned investor, we provide personalized guidance every step of the way, ensuring your home-buying experience is smooth, transparent, and rewarding.</p>
              </div>
            {/**</Animation>**/}

            <img
              className="static md:absolute self-center md:inset-y-[44rem] md:-right-[5rem]"
              src="/images/modern-house-01.jpeg"
              alt="Background Image"
            />

            {/**<Animation delay={400} x="right" y="center">**/}
              <div className="static md:absolute md:inset-y-[35rem] md:right-[2rem] p-[1rem] md:h-[14rem] md:w-[40rem] md:bg-light-blue text-xl">
                <h1 className="text-3xl font-zesta-bold pb-[1rem]"> <span className="font-zesta-black">Your</span> Vision, <span className="font-zesta-black">Our</span> Mission</h1>
                <p> At Legal Boutique Advisers, your vision of home becomes our mission, and we're here to turn it into reality. Discover your perfect property with us and embark on a journey that promises not just a house, but a place you'll truly call home.</p>
              </div>
            {/**</Animation>**/}

            <img
              className="static md:absolute self-center md:inset-y-[67rem] md:-left-[4rem]"
              src="/images/watercolor-mijas-road.jpeg"
              alt="Background Image"
            />

            {/**<Animation delay={400} x="right" y="center">**/}
              <div className="static md:absolute md:inset-y-[70rem] md:right-[2rem] p-[1rem] md:h-[20rem] md:w-[40rem] md:bg-light-blue text-xl">
                <h1 className="text-3xl font-zesta-bold pb-[1rem]">Expert Legal Support: Golden Visa</h1>
                <p> The <span className="font-zesta-black">Golden Visa</span> residence permit is designed to cater to non-European Union citizens seeking to make investments that grant them the privilege of residing and <span className="font-zesta-black">moving seamlessly</span> within <span className="font-zesta-black">European</span> nations. Our legal services are dedicated to furnishing you with comprehensive <span className="font-zesta-black">assistance and counsel</span> throughout the requisite procedures for securing a Golden Visa. This coveted permit can be acquired either through a <span className="font-zesta-black">real estate investment</span> or various other forms of investment. </p>
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
export default Buy;



