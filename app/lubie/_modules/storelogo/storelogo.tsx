import React from "react";
import Imagelogo from "./image";

function Storelogo() {
  return (
    <div className="logo">
      <div className="wrapper flex flex-col justify-center items-center mx-auto pt-5">
        <div>
          <h1 className="text-3xl text-lubie-light-blue pt-5">
            Available in stores
          </h1>
        </div>
        <div className="flex flex-row justify-center items-center px-auto pt-5 mb-10">
          <Imagelogo />
        </div>
      </div>
    </div>
  );
}

export default Storelogo;
