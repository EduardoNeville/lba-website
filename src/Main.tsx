import Animation from './components/transitions/Animation'
import ButtonItem from './components/buttonItem'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer'
import ContactHero from './components/contactHero'
import LandingPage from './LandingPage';

function Main(){
  return (
    <main>
      <Navbar />

      <LandingPage />

      <section className="relative bg-slate-50">
        <section className="h-[50rem] md:h-[45rem] w-screen">
          <div className="h-4 bg-primary"> </div>
          <div className="relative flex flex-col space-y-[2rem] md:w-[55rem] md:pt-[2rem] md:pb-[4rem] md:mx-auto">
            <Animation delay={400} x="right" y="center" className="z-20">
              <div className= "relative md:absolute md:inset-y-[18rem] md:-right-[8rem] md:w-[45rem] md:h-[15rem] mx-[1rem] my-[2rem] p-[1rem] md:p-[2rem] bg-slate-50 md:bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                <Animation delay={5000} x="right" y="center">
                  <h1 className= "text-3xl font-zesta-black"> Expertise</h1>
                </Animation>
                <Animation delay={2500} x="right" y="center">
                  <p className="my-[1rem] font-zesta-regular"> Our firm is a law and tax boutique that specializes in the real estate sector and offers you expert advice and representation as your investor, promoter and/or professional intermediate in real estate transactions, without the language being an obstacle.</p>
                </Animation>
              </div>
            </Animation>
            <Animation delay={800} x="left" y="center">
              <img
                alt="Sailing Boat"
                className="relative md:absolute md:inset-y-[8rem] md:-left-[8rem] md:w-[45rem] h-auto md:rounded-lg"
                src="/images/sail-boat-sunrise.jpeg"
              />
            </Animation>
          </div>
        </section>

        <section className="h-[50rem] md:h-[45rem] w-screen bg-slate-50">
          <div className="relative flex flex-col space-y-[2rem] md:pt-[2rem] md:pb-[4rem] md:w-[55rem] md:mx-auto">
            <Animation delay={1000} x="left" y="center" className="z-20">
              <div className= "relative md:absolute md:inset-y-[12rem] md:-left-[8rem] z-20 md:w-[45rem] md:h-[13rem] mx-[1rem] p-[1rem] md:p-[2rem] bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                <Animation delay={1000} x="left" y="center">
                  <h1 className="text-3xl font-zesta-black">Interested in buying?</h1>
                </Animation>
                <Animation delay={1200} x="left" y="center">
                  <p className="mt-[10px] font-zesta-regular">We're your Marbella house-hunting experts. With our local knowledge and an array of listings, we'll help you find your dream home effortlessly. From consultation to closing, we make buying in Marbella a breeze.</p>
                </Animation>
                <Animation delay={1200} x="left" y="center">
                  <div className="my-[1rem]">
                    <ButtonItem
                      className="static md:absolute md:w-[20rem] h-[3rem]"
                      href="./buy"
                      text="Buy With Us"
                      theme="light"
                    />
                  </div>
                </Animation>
              </div>
            </Animation>

            <Animation delay={1400} x="right" y="center">
              <img
                className="relative md:absolute md:inset-y-[5rem] md:-right-[8rem] md:w-[45rem] h-auto md:rounded-lg"
                src="/images/golf-villapadierna.jpg"
                alt="Golf villapadierna"
              />
            </Animation>
          </div>
        </section>

        <div className="sticky">
          <div className="h-4 bg-primary"> </div>
          <img
            src="/images/sea-malaga.jpeg"
            className="h-screen"
            alt="Background Image"
          />
        </div> 

        <section className="h-[57rem] md:h-[45rem] w-screen bg-slate-50">
          <div className="h-4 bg-primary"> </div>
          <div className="relative flex flex-col space-y-[2rem] pt-[4rem] md:pt-[2rem] md:w-[55rem] md:mx-auto">
            <Animation delay={400} x="left" y="center" className="z-20">
              <div className= "static md:absolute md:inset-y-[12rem] md:-left-[8rem] md:h-[18.5rem] md:w-[45rem] z-20 mx-[1rem] md:p-[2rem] bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                <Animation delay={800} x="left" y="center">
                  <h1 className="text-3xl font-zesta-black">Time to make a listing?</h1>
                </Animation>
                <Animation delay={400} x="left" y="center">
                  <p className="mt-[10px] font-zesta-regular"> We're your Marbella house-hunting experts. With our locaWe're your Marbella selling experts. From pricing to marketing, we've got you covered for a seamless selling experience. Trust us to maximize your property's value and secure the best deal possible. With our extensive expertise and range of listings, we'll make finding your dream home effortless. From consultation to closing, we make buying in Marbella feel like a summer breeze. </p>
                </Animation>
                <Animation delay={400} x="right" y="center">
                  <div className="mt-[1.5rem]">
                    <ButtonItem
                      href="./sell"
                      className="static md:absolute md:w-[20rem] h-[3rem] font-cocogothic tracking-tighter text-xl bg-primary text-primary rounded-none"
                      text="Market With Us"
                      theme="light"
                    />
                  </div>
                </Animation>
              </div>
            </Animation>

            <Animation delay={400} x="right" y="center">
              <img
                className="relative md:absolute md:inset-y-[8rem] md:-right-[8rem] md:w-[45rem] h-auto"
                src="/images/mano_y_boli.jpg"
                alt="Mano y boli"
              />
            </Animation>
          </div>
        </section>

        <section className="h-[45rem] md:h-[45rem] w-screen">
          <div className="relative flex flex-col space-y-[2rem] md:pt-[2rem] md:w-[55rem] md:mx-auto">
            <Animation delay={400} x="right" y="center" className="z-20">
              <div className= "relative md:absolute md:inset-y-[18rem] md:-right-[8rem] md:h-[16rem] md:w-[45rem] z-20 mx-[2rem] my-[2rem] pt-[4rem] md:pt-[2rem] md:pl-[2rem] bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                <Animation delay={800} x="right" y="center">
                  <h1 className="text-3xl font-zesta-black"> Culture and Artistry </h1>
                </Animation>
                <Animation delay={400} x="right" y="center">
                  <p className="my-[1rem] font-zesta-regular"> At Legal Boutique Advisers we hold a profound appreciation for art in all its forms, considering it an essential facet of daily life's harmony. We are dedicated to fostering and promoting culture in all its expressions, actively supporting contemporary artists by providing a platform to showcase their creativity and talent on our website. </p>
                </Animation>
              </div>
            </Animation>
            <Animation delay={400} x="left" y="center">
              <img
                className="relative md:absolute md:inset-y-[8rem] md:-left-[8rem] md:w-[45rem] h-auto md:rounded-lg"
                src="/images/CaC-03.jpeg"
                alt="CaC"
              />
            </Animation>
          </div>
        </section>

        <section className="h-[72rem] md:h-[55rem] w-screen">
          <div className= "relative flex flex-col space-y-[2rem] md:w-[55rem] md:mx-auto">
            <Animation delay={1000} x="left" y="center" className="z-20">
                <div className= "relative md:absolute md:inset-y-[12rem] md:-left-[8rem] md:h-[29rem] md:w-[45rem] z-20 mx-[2rem] my-[2rem] md:p-[2rem] bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                  <Animation delay={1200} x="left" y="center">
                    <h1 className="text-3xl font-zesta-black"> Patronage </h1>
                  </Animation>
                  <Animation delay={400} x="left" y="center">
                    <p className="my-[1rem] font-zesta-regular"> The Musical Outreach Center of the Mediterranean was founded in Marbella in 2004. Since then he has developed different activities related to classical music. Also known as Música con Encanto, this project has carried out since its foundation a season of concerts, musical documentary cinema, courses and workshops for adults, musical trips and the administrative and artistic management of the Little Mediterranean Orchestra, children's orchestra and youth string. Under the presidency of Honor of the master Daniel Barenboim since 2009, this project of cultural reference in the area, has managed to create this abstract space, generator of musical experiences that nurture the passion for classical music on the Costa del Sol. </p>
                  </Animation>
                </div>
            </Animation>
            <Animation delay={1000} x="right" y="center">
              <img
                className="relative md:absolute md:inset-y-[8rem] md:-right-[10rem] md:w-[45rem]"
                src="/images/playing-piano.jpeg"
                alt="Musica Y Cultura"
              />
            </Animation>
          </div>
        </section>

        <section className="h-[47rem] md:h-[45rem] w-screen">
          <div className= "relative flex flex-col">
            <Animation delay={400} x="right" y="center" className="z-20">
              <div className= "relative md:absolute md:-right-[8rem] z-20 md:h-[18rem] md:w-[44rem] mx-[2rem] md:p-[2rem] bg-slate-50 text-primary text-xl text-left md:text-justify md:rounded-lg">
                <Animation delay={400} x="right" y="center">
                  <h1 className="text-3xl font-zesta-black"> Investing in the future </h1>
                </Animation>
                <Animation delay={400} x="right" y="center">
                  <p className="mt-[1rem] font-zesta-regular"> We're your Marbella investment specialists, offering local insights and opportunities to simplify your journey. From property selection to financial guidance, we're here to ensure your Marbella investments thrive. </p>
                </Animation>
                <Animation delay={400} x="right" y="center">
                  <div className="my-[0.5rem]">
                    <ButtonItem
                      className="static md:absolute md:right-[0rem] md:w-[20rem] h-[3rem] font-cocogothic tracking-tighter text-xl bg-transparent text-primary rounded-none"
                      href="./sell"
                      text="Start Investing Now"
                      theme="light"
                    />
                  </div>
                </Animation>
              </div>
            </Animation>
            <Animation delay={400} x="left" y="center">
              <img
                className="relative md:absolute md:inset-y-[8rem] md:-left-[8rem] md:w-[45rem] h-auto"
                src="/images/la-farola.jpeg"
                alt="Image to choose"
              />
            </Animation>
          </div>
        </section>

      </section>

      <ContactHero />

      <Footer />
    </main>
  );
}
export default Main;
