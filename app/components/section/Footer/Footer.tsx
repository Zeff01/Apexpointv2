import React from "react";
import Section from "../../ui/Section";
import { FooterDataType, footerData } from "../../data/apexpoint/footerData";
import Socials from "@/app/apexpoint/section/footer/component/Socials";
import Image from "next/image";
import apexpointLogo from "@/public/assets/apexpoint-logo.png";

type FooterProps = {
  variant: "chlorelief" | "lubie";
};

// add styles below --- shane

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const data = footerData.map((item: FooterDataType) => {
    return (
      <div
        key={item.title}
        className={`p-4 ${
          variant === "chlorelief"
            ? "bg-chlorelief-springwood"
            : "bg-lubie-dark-blue"
        }`}
      >
        <p>{item.title}</p>
        <ul>
          {item.list.map((list, index) => (
            <li key={index}>
              {list.icon && <span>{list.icon}</span>}
              {list.information}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <Section id="footer" className="text-white">
      <div>{data}</div>
      <div>
        <Socials className="bg-chlorelief-springwood" iconColor="text-white" />
      </div>
      <div className="bg-chlorelief-springwood">
        <Image src={apexpointLogo} alt="apexpoint" />
        <p>2021 © Copyright. All rights reserved.</p>
      </div>
    </Section>
  );
};

export default Footer;
