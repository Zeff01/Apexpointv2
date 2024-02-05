"use client";
import React, { FunctionComponent, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { sendContactForm } from "@/app/apexpoint/lib/api";
import InputRow from "./components/InputRow";
import TextInput from "./components/TextInput";
import TextArea from "./components/TextArea";
import Button from "./components/Button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type TMessageStatus = "standby" | "loading" | "success" | "error";

const ContactForm: FunctionComponent = () => {
  const [messageStatus, setMessageStatus] = useState<TMessageStatus>("standby");

  const handleSuccess = () => {
    setMessageStatus("success");
    setTimeout(() => {
      setMessageStatus("standby");
    }, 5000);
  };

  const handleError = (error: Error) => {
    setMessageStatus("error");
    console.error("Error sending email:", error);
    setTimeout(() => {
      setMessageStatus("standby");
    }, 6000);
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    setMessageStatus("loading");
    try {
      await sendContactForm(values);
      handleSuccess();
    } catch (error: any) {
      handleError(error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        phone: Yup.string().required("Number is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        message: Yup.string().required("Message is required"),
      })}
      onSubmit={handleSubmit}
    >
      <Form className="flex w-auto min-[375px]:w-[350px] flex-col items-center justify-center gap-8 sm:mx-auto sm:my-0 ss:w-full">
        <InputRow>
          <TextInput
            label="Name"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your Name"
          />
        </InputRow>

        <InputRow>
          <TextInput
            label="Phone"
            name="phone"
            id="phone"
            type="text"
            placeholder="Enter your Phone"
          />
        </InputRow>

        <InputRow>
          <TextInput
            label="Email"
            name="email"
            id="email"
            type="email"
            placeholder="Enter your Email"
          />
        </InputRow>

        <InputRow className="min-h-[11rem]">
          <TextArea
            label="Message"
            name="message"
            id="textarea"
            type="textarea"
            placeholder="Enter your message"
          />
        </InputRow>
        <div className="w-full flex items-center justify-center">
          <Button messageStatus={messageStatus} />
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
