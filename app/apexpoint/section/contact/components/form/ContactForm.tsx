"use client";
import React, { useRef, useState, FormEvent } from "react";
import InputRow from "./components/InputRow";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Button from "./components/Button";
import emailjs from "@emailjs/browser";

import {
  validateInputs,
  validateForm,
  TMessageStatus,
} from "@/utils/formUtils";

const ContactForm = () => {
  const [messageStatus, setMessageStatus] = useState<TMessageStatus>("standby");

  const formRef = useRef<HTMLFormElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const userEmail = useRef<HTMLInputElement>(null);
  const userPhone = useRef<HTMLInputElement>(null);
  const userMessage = useRef<HTMLTextAreaElement>(null);

  const getInputValue = (
    ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>,
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
          "NYOzmlYunw07zCeOw",
        )
        .then(
          () => {
            console.log("SUCCESS!");
            setMessageStatus("success");
          },
          (error) => {
            console.log("FAILED...", error.text);
            setMessageStatus("error");
          },
        );
    } else {
      console.error("Form reference is null.");
      setMessageStatus("error");
    }
  };

  return (
    <form
      className="flex w-auto min-[375px]:w-[350px] flex-col items-center justify-center gap-8 sm:mx-auto sm:my-0 ss:w-full"
      ref={formRef}
      onSubmit={sendEmail}
    >
      <InputRow>
        <TextInput
          label="Name"
          name="user_name"
          id="name"
          type="text"
          placeholder="Enter your Name"
          ref={userName}
        />
      </InputRow>

      <InputRow>
        <TextInput
          label="Phone"
          name="user_phone"
          id="phone"
          type="text"
          placeholder="Enter your Phone"
          ref={userPhone}
        />
      </InputRow>

      <InputRow>
        <TextInput
          label="Email"
          name="user_email"
          id="email"
          type="email"
          placeholder="Enter your Email"
          ref={userEmail}
        />
      </InputRow>

      <InputRow className="min-h-[11rem]">
        <TextArea
          label="Message"
          name="message"
          id="textarea"
          placeholder="Enter your Message"
          ref={userMessage}
        />
      </InputRow>

      <div className="w-full flex items-center justify-center">
        <Button messageStatus={messageStatus} />
      </div>
    </form>
  );
};

export default ContactForm;
