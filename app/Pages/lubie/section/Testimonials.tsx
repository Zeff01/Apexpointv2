
import Cards from '../components/cards';
import Storelogo from '../components/storelogo/storelogo';

function Testimonials() {
  
  return (
    <div className="testimonials h-[50vh] w-full bg-lubie-light-blue md:h-[60vh]">
      <div className="container mx-auto">
        <div className="wrapper flex items-center text-lubie-navy-blue pt-10 justify-center text-center flex-col mx-auto md:justify-around md:flex-row md:item-start md:text-left md:pt-28">
          <div className="left flex flex-col">
            <p className="text-sm text pt-2 font-medium">CUSTOMERS REVIEW</p>
            <div>
              <h1 className="text-3xl font-extrabold gap-4 flex ">
                What Our Customers Say About <br />Our Products
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

      {/* Common container for h1 and Carousel */}
      <div className="container h-[60vh] mx-auto flex justify-center items-center md:h-[70vh]">
        <div className="card overflow-hidden">
          <div className="wrapper flex justify-around items-center">
          
                <div className="left px-5 flex-none md:flex">
                <Cards />
                </div>
                <div className="right p-10 flex-none md:flex hidden">
                <Cards />
                </div>
                <div className="middle p-10 flex-none hidden md:flex ">
                <Cards />
                </div>
  
          </div>
          <div className="border-gray-200 w-[100%] border-b h-full"></div>

          <div className="storelogo h-[10vh] mb-20 hidden md:flex justify-center">
            <div className="wrapper">
              <Storelogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
