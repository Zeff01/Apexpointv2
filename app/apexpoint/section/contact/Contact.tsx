import React from "react";
import Header from "@/app/components/ui/Header";
import Section from "@/app/components/ui/Section";
import ContactForm from "./components/form/ContactForm";
import Links from "./components/Links/Links";

const Contact = () => {
  return (
    <Section id="contact" className="flex flex-col gap-8 items-center py-8 ">
      <Header>Contact Us</Header>
      <div className="flex flex-col min-[800px]:flex-row md:gap-8 gap-y-4">
        <Links />
        <ContactForm />
      </div>
    </Section>
  );
};

export default Contact;
