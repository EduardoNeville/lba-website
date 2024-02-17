import React, { useState, FormEvent} from "react";
import ButtonItem from "./buttonItem";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.currentTarget.elements as any;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <section>
        <div className="py-auto px-auto mx-auto max-w-screen-md">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-xl font-zesta-bold text-primary dark:text-primary">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-s-blue border border-primary text-primary text-sm rounded-none focus:ring-primary focus:border-primary block w-full p-2.5" placeholder="name@email.com" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-xl font-zesta-bold text-primary dark:text-primary">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-xl font-zesta-regular text-primary bg-s-blue rounded-none border border-primary shadow-sm focus:ring-primary focus:border-primary" placeholder="Let us know how we can help you" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-xl font-zesta-bold text-primary">Your message</label>
                    <textarea id="message" className="block p-2.5 w-full text-xl font-zesta-regular text-primary bg-s-blue rounded-none shadow-sm border border-primary focus:ring-primary focus:border-primary" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="rounded-none font-zesta-bold tracking-tighter text-xl bg-transparent text-primary py-3 px-5 text-center border border-primary sm:w-fit hover:bg-sky-50 focus:ring-4 focus:outline-none focus:ring-primary">{status}</button>
            </form>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
