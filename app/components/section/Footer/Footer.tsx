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
      <div key={item.title} className="p-4">
        <p className="m-3 ml-0 font-medium">{item.title}</p>
        <ul>
          {item.list.map((list, index) => (
            <li key={index} className="flex gap-3 mb-3 text-sm">
              {list.icon && (
                <Image
                  className="grayscale object-contain"
                  src={list.icon}
                  alt={list.information}
                  width={19}
                  height={19}
                />
              )}
              {list.information}
            </li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <Section
      id="footer"
      className={`p-4 ${
        variant === "chlorelief"
          ? "bg-chlorelief-springwood"
          : "bg-lubie-dark-blue"
      }  text-white `}
    >
      <div className="md:flex w-100 justify-center md:gap-[100px] md:pt-[40px]  md:mb-[30px] hidden ">
        {data}
      </div>
      <div className="flex justify-center mt-5">
        <Socials iconColor="text-white" />
      </div>
      <div className="flex justify-center items-center gap-3  mt-5 mb-0">
        <Image src={apexpointLogo} alt="apexpoint" width={30} />
        <p className="text-lubie-light-blue text-xs m-0">
          2021 © Copyright. All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
