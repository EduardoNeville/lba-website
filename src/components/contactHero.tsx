import ButtonItem from './buttonItem';
import Footer from "./footer";


const ContactHero: React.FC = () => {
  return (
    <>
        <img
          alt="Modern Villa"
          src="/images/modern-villa.jpeg"
          className="sticky top-0 h-screen"
        />
      <section className="relative bg-light-blue text-primary">
        <div className="m-0 h-4 bg-primary"> </div>
        <div className="md:w-[55rem] mx-[2rem] md:mx-auto py-[2rem] text-left md:text-justify text-xl font-zesta-regular">
          <h1 className="pt-[2rem] text-4xl md:text-6xl font-zesta-bold">Do not hesitate to contact us</h1>
          <p className="pt-[2rem]">Having extensive experience in market <span className="font-zesta-bold">research</span>, we have developed a deep understanding of the real estate industry and the factors that influence market <span className="font-zesta-bold">trends</span>. Our skills collecting and analyzing data show us able to translate <span className="font-zesta-bold">complex</span> research findings into actionable insights for our clients.</p>
          <div className="flex flex-row-reverse ml-2 mt-5 md:mt-8 gap-10">
            <ButtonItem
              className="w-80 h-15"
              href="./contactus"
              text="Contact Us"
              theme="light"
            />

            <ButtonItem
              className="w-80 h-15"
              href="./aboutus"
              text="Learn more"
              theme="light"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactHero;
