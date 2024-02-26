'use client';
import emailjs from '@emailjs/browser';
import Socials from '@/app/apexpoint/section/footer/_modules/Socials';
import { contactDataType, contactData } from '@/components/data/apexpoint/contactData';
import { validateInputs, validateForm, TMessageStatus } from '@/utils/formUtils';
import { FormEvent, useRef, useState } from 'react';
import {
  fadeInOutRightToLeft,
  SocialStagger,
  fadeInOutLeftToRight,
  FadeStagger,
} from '@/components/animation/animation';
import { motion } from 'framer-motion';

type ContactProps = {
  variant: 'chlorelief' | 'lubie';
};

const messageText: Record<TMessageStatus, string> = {
  standby: 'Send Message',
  loading: 'Sending',
  success: 'Message Sent',
  error: 'Message Failed',
};

const Contact: React.FC<ContactProps> = ({ variant }) => {
  const [messageStatus, setMessageStatus] = useState<TMessageStatus>('standby');

  const formRef = useRef<HTMLFormElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const userEmail = useRef<HTMLInputElement>(null);
  const userPhone = useRef<HTMLInputElement>(null);
  const userMessage = useRef<HTMLTextAreaElement>(null);

  const getInputValue = (ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>) => ref.current?.value || '';

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const inputs = {
      userName: getInputValue(userName),
      userEmail: getInputValue(userEmail),
      userPhone: getInputValue(userPhone),
      userMessage: getInputValue(userMessage),
    };

    // Validate inputs...
    const validationResults = validateInputs(inputs);

    // Form is valid
    const formisValid = validateForm(validationResults);

    if (!formisValid) {
      setMessageStatus('error');
      return;
    }

    if (formRef.current) {
      setMessageStatus('loading');
      sendEmailRequest();
    }
  };

  const sendEmailRequest = () => {
    const currentForm = formRef.current;

    if (currentForm) {
      emailjs.sendForm('service_6eytzbl', 'template_1k8w2q5', currentForm, 'NYOzmlYunw07zCeOw').then(
        () => {
          console.log('SUCCESS!');
          setMessageStatus('success');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMessageStatus('error');
        },
      );
    } else {
      console.error('Form reference is null.');
      setMessageStatus('error');
    }
  };

  const data = contactData.map((contact: contactDataType) => {
    return (
      <motion.div
        variants={fadeInOutRightToLeft}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start justify-start"
      >
        <div className="flex space-x-2  justify-start">
          {<contact.icon className="text-3xl" />}
          <p className="mb-2 font-bold ">{contact.title}</p>
        </div>
        <div className="pl-10">
          {contact.information.map((details, index) => (
            <p key={index}>{details.details}</p>
          ))}
        </div>
      </motion.div>
    );
  });

  return (
    <section
      id="contact"
      className={`flex flex-col md:flex-row w-full justify-center items-center p-12 md:pt-[100px] md:pb-[70px] bg-lubie-white-color
      ${variant === 'chlorelief' ? 'text-chlorelief-springwood' : 'text-lubie-dark-blue'}
      `}
    >
      <div className="md:pr-[50px] lg:pr-[100px] space-y-6  flex flex-col    lg:border-r-2 lg:border-gray-200 ">
        <div className="mb-2">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeInOutLeftToRight}
            transition={{
              duration: 0.3,
            }}
            className="text-5xl font font-bold mb-5 -z-20 sm:drop-shadow-lg shadow-black "
          >
            For Bulk Orders
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeInOutLeftToRight}
            transition={{
              delay: 0.3,
              duration: 0.3,
            }}
            className="text-black-600 text-start"
          >
            Get in touch with us through our contact section. <p className="gap-4" /> Connect with us for assistance or
            feedback through our contact section. We're here to help!
            <p className="hidden gap-4" />
          </motion.p>
        </div>
        <div className="">
          <motion.form
            variants={FadeStagger}
            initial="hidden"
            whileInView="visible"
            onSubmit={sendEmail}
            ref={formRef}
            className="space-y-4"
          >
            <div className="w-full grid md:grid-cols-1 grid-cols-1 gap-x-10 gap-y-4">
              <motion.div variants={fadeInOutLeftToRight} transition={{ duration: 0.3 }}>
                <label htmlFor="user_name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="ex. Anna"
                  className="mt-1 p-2 w-full border-4 rounded-md"
                  ref={userName}
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
              <motion.div variants={fadeInOutLeftToRight} transition={{ duration: 0.3 }}>
                <label htmlFor="user_email" className="block text-sm font-medium text-black-600">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="user_email"
                  placeholder="ex. anna@example.com"
                  className="mt-1 p-2 w-full border-4 rounded-md"
                  ref={userEmail}
                />
              </motion.div>
              <motion.div variants={fadeInOutLeftToRight} transition={{ duration: 0.3 }}>
                <label htmlFor="user_phone" className="block text-sm font-medium text-black-600">
                  Contact
                </label>
                <input
                  type="text"
                  id="phone"
                  name="user_phone"
                  placeholder="ex. +6391235487262"
                  className="mt-1 p-2 w-full border-4 rounded-md"
                  ref={userPhone}
                />
              </motion.div>
            </div>

            <motion.div variants={fadeInOutLeftToRight} transition={{ duration: 0.3 }}>
              <label htmlFor="message" className="block text-sm font-medium text-black-600">
                Message
              </label>
              <textarea
                id="textarea"
                name="message"
                rows={5}
                placeholder=" Message here..."
                className="w-full border-4 rounded-md mt-1 p-2"
                ref={userMessage}
              />
            </motion.div>

            <motion.div variants={fadeInOutLeftToRight} transition={{ duration: 0.5 }} className="flex justify-center">
              <button
                disabled={messageStatus === 'loading'}
                className={`flex gap-2 items-center justify-center p-2 font-bold w-[300px] rounded-lg border-box border-2 ${
                  variant === 'chlorelief'
                    ? 'border-chlorelief-springwood text-black-200 hover:bg-chlorelief-springwood'
                    : 'border-lubie-dark-blue text-black-200 hover:bg-lubie-dark-blue'
                }  hover:text-white ${messageStatus === 'loading' ? 'cursor-not-allowed opacity-70' : ''}`}
              >
                <span>{messageText[messageStatus]}</span>
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>

      <motion.div
        variants={FadeStagger}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col md:mt-0 mt-12 md:flex-wrap  md:w-1/4 w-3/4 space-y-12 justify-center lg:pl-12"
      >
        {data}

        <div className="flex w-full items-center justfiy-center md:justify-start">
          <Socials
            className="justify-center items-center w-full"
            iconColor={`${variant === 'chlorelief' ? 'text-chlorelief-springwood' : 'text-lubie-dark-blue'}`}
          />
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
