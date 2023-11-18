'use client'
import Cards from '../components/cards';
import Storelogo from '../components/storelogo/storelogo';
import Cardslide from '../components/cardslide';

function Testimonials() {
  
  return (
    <div className="testimonials h-[50vh] w-full bg-lubie-sky-blue md:h-[60vh]">
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

      {/* Common container for h1 and Carousel */}
      <div className="container h-[60vh] mx-auto my-auto flex justify-center items-center md:h-[70vh]">
        <div className="card overflow-hidden">
          <div className="wrapper flex justify-around pt-5 items-center">
          
               <div className="flex md:hidden pl-7 flex-none w-full z-50">
                  <Cardslide />
                </div>

                {/* Single Card is shown on smaller screens */}
                <div className="hidden md:flex px-5 mt-28 hidden-none w-full z-50 mb-10">
                  <div className='pr-10'>
                  <Cards/>
                  </div>
                  <div className='px-10'>
                  <Cards/>
                  </div>
                  <div className='pl-10'>
                  <Cards/>
                  </div>
                 
                </div>
                
          </div>
          <div className="border-gray-300 w-[100%] border-b h-full"></div>

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