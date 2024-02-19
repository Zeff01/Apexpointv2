"use client";

import emailjs from "@emailjs/browser";
import Socials from "@/app/apexpoint/section/footer/_modules/Socials";
import {
  contactDataType,
  contactData,
} from "@/components/data/apexpoint/contactData";
import {
  validateInputs,
  validateForm,
  TMessageStatus,
} from "@/utils/formUtils";
import { FormEvent, useRef, useState } from "react";

type ContactProps = {
  variant: "chlorelief" | "lubie";
};

const messageText: Record<TMessageStatus, string> = {
  standby: "Send Message",
  loading: "Sending",
  success: "Message Sent",
  error: "Message Failed",
};

const Contact: React.FC<ContactProps> = ({ variant }) => {
  const [messageStatus, setMessageStatus] = useState<TMessageStatus>("standby");

  const formRef = useRef<HTMLFormElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const userEmail = useRef<HTMLInputElement>(null);
  const userPhone = useRef<HTMLInputElement>(null);
  const userMessage = useRef<HTMLTextAreaElement>(null);

  const getInputValue = (
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
  ) => ref.current?.value || "";

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
      setMessageStatus("error");
      return;
    }

    if (formRef.current) {
      setMessageStatus("loading");
      sendEmailRequest();
    }
  };

  const sendEmailRequest = () => {
    const currentForm = formRef.current;

    if (currentForm) {
      emailjs
        .sendForm(
          "service_6eytzbl",
          "template_1k8w2q5",
          currentForm,
          "NYOzmlYunw07zCeOw"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setMessageStatus("success");
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMessageStatus("error");
          }
        );
    } else {
      console.error("Form reference is null.");
      setMessageStatus("error");
    }
  };

  const data = contactData.map((contact: contactDataType) => {
    return (
      <div className="flex flex-col items-start justify-start">
        <div className="flex space-x-2  justify-start">
          {<contact.icon className="text-3xl" />}

          <p className="mb-2 font-bold ">{contact.title}</p>
        </div>
        <div className="pl-10">
          {contact.information.map((details, index) => (
            <p key={index}>{details.details}</p>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div
      id="contact"
      className={`flex flex-col md:flex-row w-full justify-center items-center p-12 md:pt-[100px] md:pb-[70px] bg-lubie-white-color
      ${
        variant === "chlorelief"
          ? "text-chlorelief-springwood"
          : "text-lubie-dark-blue"
      }
      `}
    >
      <div className="md:pr-[50px] lg:pr-[100px] space-y-6  flex flex-col    lg:border-r-2 lg:border-gray-200 ">
        <div className="mb-2">
          <h2 className="text-5xl font font-bold drop-shadow-lg shadow-black mb-5 z-20">
            For Bulk Orders
          </h2>
          <p className="text-black-600 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br className="hidden sm:flex" />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="">
          <form onSubmit={sendEmail} ref={formRef} className="space-y-4 ">
            <div className="w-full  grid md:grid-cols-1 grid-cols-1 gap-x-10 gap-y-4">
              <div>
                <label
                  htmlFor="user_name"
                  className="block text-sm font-medium "
                >
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
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
              <div>
                <label
                  htmlFor="user_email"
                  className="block text-sm font-medium text-black-600"
                >
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
              </div>
              <div>
                <label
                  htmlFor="user_phone"
                  className="block text-sm font-medium text-black-600"
                >
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
              </div>
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black-600"
              >
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
            </div>

            <div className="flex justify-center">
              <button
                disabled={messageStatus === "loading"}
                className={`flex gap-2 items-center justify-center p-2 font-bold w-[300px] rounded-lg border-box border-2 ${
                  variant === "chlorelief"
                    ? "border-chlorelief-springwood text-black-200 hover:bg-chlorelief-springwood"
                    : "border-lubie-dark-blue text-black-200 hover:bg-lubie-dark-blue"
                }  hover:text-white ${
                  messageStatus === "loading"
                    ? "cursor-not-allowed opacity-70"
                    : ""
                }`}
              >
                <span>{messageText[messageStatus]}</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:mt-0 mt-12 md:flex-wrap  md:w-1/4 w-3/4 space-y-12 justify-center lg:pl-12">
        {data}

        <div className="flex w-full items-center justfiy-center md:justify-start">
          <Socials
            className="justify-center items-center w-full"
            iconColor={`${
              variant === "chlorelief"
                ? "text-chlorelief-springwood"
                : "text-lubie-dark-blue"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
