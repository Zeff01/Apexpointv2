import React from "react";
import LubieCard from "../../_modules/LubieCard";

const Products = () => {
  return (
    <div
      id="products"
      className="w-full md:flex-row flex flex-col justify-center items-center mt-8 md:mb-0  mb-20 h-full "
    >
      <div className="">
        <div className="w-full flex flex-col items-center mb-5">
          <h1 className="md:text-5xl text-4xl text-lubie-dark-blue  font-extrabold lg:text-4xl drop-shadow-md">
            Our Products
          </h1>
          <p className="md:text-xl text-lubie-dark-blue text-center py-8 w-[60%]">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
            dolor sitametamet
          </p>
        </div>

        {/* Items Sections */}
        <div className="md:flex-row  flex justify-center items-center w-full ">
          <div className="container flex flex-wrap justify-center items-center gap-7 lg:w-[1200px] ">
            <LubieCard
              title="10ml Lubie"
              imageUrl="assets/lubie-assets/lubie-10ml.png"
              price="₱32"
              quantity="10"
            />
            <LubieCard
              title="35ml Lubie"
              imageUrl="assets/lubie-assets/lubie-35ml.png"
              price="₱132"
              quantity="30"
            />
            <LubieCard
              title="100ml Lubie"
              imageUrl="assets/lubie-assets/lubie-100ml.png"
              price="₱420"
              quantity="100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
