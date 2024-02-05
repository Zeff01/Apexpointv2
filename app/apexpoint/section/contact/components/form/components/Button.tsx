import React, { FunctionComponent } from "react";
import CheckIcon from "@/app/apexpoint/section/contact/components/icons/CheckIcon";
import MailSendIcon from "@/app/apexpoint/section/contact/components/icons/MailSendIcon";
import MailFailIcon from "@/app/apexpoint/section/contact/components/icons/MailFailIcon";
import LoadIcon from "@/app/apexpoint/section/contact/components/icons/LoadIcon";

type MessageStatus = "standby" | "loading" | "success" | "error";

export type ButtonProps = {
  messageStatus: MessageStatus;
};

const Icon: Record<MessageStatus, React.JSX.Element> = {
  standby: <MailSendIcon />,
  loading: <LoadIcon />,
  success: <CheckIcon />,
  error: <MailFailIcon />,
};

const messageText: Record<MessageStatus, string> = {
  standby: "Send Message",
  loading: "Sending",
  success: "Message Sent",
  error: "Message Failed",
};

const Button: FunctionComponent<ButtonProps> = ({ messageStatus }) => {
  return (
    <button
      type="submit"
      disabled={messageStatus === "loading"}
      className={`flex gap-2 w-full min-[425px]:w-[210px] items-center justify-center rounded-lg bg-apexpoint-dark-orange text-white hover:outline-4 py-2 px-4 hover:outline hover:outline-apexpoint-light-orange ${
        messageStatus === "loading" ? "cursor-not-allowed opacity-70" : ""
      }`}
    >
      <span>{messageText[messageStatus]}</span>
      <span>{Icon[messageStatus]}</span>
    </button>
  );
};

export default Button;
