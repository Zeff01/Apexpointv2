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
              <p className="mt-5 text-xl sm:text-sm">
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
                <Cardslide />
              </div>
              <div className="hidden md:flex px-5 mt-2 hidden-none w-full  z-0 mb-12">
                <div className="pr-10">
                  <Cards
                  stars={5}
                  description="The product was well-packaged. I bought this because forums said this was the best lube because it has no irritants at all."
                  name="A***."
                  
                   />
                </div>
                <div className="px-10">
                  <Cards 
                  stars={5}
                  description="Safe and effective. Im allergic to glycerin and this product helps a lot"
                  name="R***."
                 
                  />
                </div>
                <div className="pl-10">
                  <Cards
                  stars={5}
                  description="I have dry skin in my private area and when I tried this product, it's really effective. It's not itchy anymore. 
                  Watsons really put effort in their packaging. It was packed securely and no damages on the product."
                  name="K***"
                  
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional white space section */}
      <div className="bg-white md:h-[25vh] h-[35vh] w-full"></div>
    </div>
  );
}

export default Testimonials;
