"use client";
import Cards from "../components/cards";
import Cardslide from "../components/cardslide";

function Testimonials() {
  return (
    <div>
      <div className="testimonials h-[50vh] w-full bg-lubie-light-blue md:h-[60vh]">
        <div className="container mx-auto text-lubie-dark-blue">
          <div className="wrapper flex items-center text-lubie-navy-blue pt-10 justify-center text-center flex-col mx-auto md:justify-around md:flex-row md:item-start md:text-left md:pt-28">
            <div className="left flex flex-col">
              <p className="text-sm text pt-2 font-medium">CUSTOMERS REVIEW</p>
              <div>
                <h1 className="text-2xl font-extrabold gap-4 flex md:text-3xl md:w-[70%]">
                  What Our Customers Say About Our Products
                </h1>
              </div>
            </div>
            <div className="right w-auto md:w-1/3">
              <p className="mt-5 text-sm md:mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                rerum aperiam laboriosam inventore dignissimos illum ullam
                repellendus dolor nam iusto quae non nihil. Culpa blanditiis
                veritatis nostrum, dignissimos illo reprehenderit!
              </p>
            </div>
          </div>
        </div>

        <div className="container h-[60vh] my-auto flex justify-center items-center z-50 md:h-[70vh] mx-auto">
          <div className="card overflow-hidden">
            <div className="wrapper flex justify-around pt-5 items-center">
              <div className="flex pl[7%] md:hidden w-full z-0 sm:pl[7%]">
                {/* <Cardslide /> */}
              </div>
              <div className="hidden md:flex px-5 mt-2 hidden-none w-full  z-0 mb-10">
                <div className="pr-10">
                  <Cards />
                </div>
                <div className="px-10">
                  <Cards />
                </div>
                <div className="pl-10">
                  <Cards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional white space section */}
      <div className="bg-red-500 md:h-[25vh] h-[35vh] w-full"></div>
    </div>
  );
}

export default Testimonials;
