import React from 'react';
import ContactForm from '../components/contactform'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer';

const ContactUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="text-primary">
        <section className="sticky top-0 grid grid-cols-1 gap-1 h-screen py-24 px-10 object-fill text-center md:text-right">
          <img
            src="/images/aloha-golf.jpg"
            alt="Background Image"
          />
        </section>

        <section className="relative bg-light-blue">
          <div className="relative h-4 bg-primary"> </div>
          <div className="pt-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
            <h1 className="text-center text-6xl md:text-8xl text-left font-zesta-bold ">
              We are here to help you in any way. 
            </h1>
            <p className="text-center py-[4rem] text-2xl font-zesta-regular">
              Investing in Marbella is a smart move for its stunning location, strong rental potential, and stable economy. This coastal gem on the Costa del Sol offers a diverse range of properties and favorable tax incentives, making it an attractive destination for both lifestyle and financial gains.
            </p>
          </div> 
          <div className="pb-[15rem] md:w-[55rem] mx-[2rem] md:mx-auto text-left md:text-justify">
          <ContactForm />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
export default ContactUs;

