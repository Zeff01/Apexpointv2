import React from "react";
import goBackImg from "@/public/assets/Back.png";
import Image from "next/image";

const GoBackBtn = () => {
  return (
    <div>
      <Image src={goBackImg} alt="Go back to Apexpoint" />
      <p>Back to Apexpoint</p>
    </div>
  );
};

export default GoBackBtn;
