import Image, { StaticImageData } from "next/image";
import qoute from "@/public/assets/user-quote.png"

interface TestimonialsProps {
    StarRating : string;
    Description: string;
    ImageUrl : StaticImageData ;
    CustomerName: string;
    Customer: string;
  }
  
  const TestimonialsComponent: React.FC<TestimonialsProps> = ({
    StarRating,
    Description,
    ImageUrl ,
    CustomerName,
    Customer,
  }: TestimonialsProps) => {
    return(
      <div className="flex items-center justify-center mt-10 sm:mt-0">
      <div className="flex flex-col justify-center h-[320px] w-3/6 p-4 shadow-xl bg-white md:w-[360px] sm:z-50 sm:pl-[10%] sm:h-[390px] sm:w-4/6">
        <div className="w-full flex justify-between py-8">
          <div className="text-green-300 text-2xl">{StarRating}</div>
          <div className="text-[50px] font-abhaya-libre font-extrabold text-lubie-sky-blue">
            <Image src={qoute}
            width={30}
            height={50}
            alt="user qoute"></Image>
          </div>
        </div>
        <div className="text-[10px] sm:text-sm">
          <p>{Description}</p>
        </div>
        <div className="w-full h-[7vh] flex justify-center">
          <div className="border-gray-200 w-[90%] border-b h-full"></div>
        </div>
        <div className="w-full flex items justify-start space-x-6 p-2">
          <div className="p-2 w-[70px] h-[70px] bg-lubie-gray-white">
            <Image className="rounded-full" src={ImageUrl} width={50} height={50} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">{CustomerName}</p>
            <p className="text-xs">{Customer}</p>
          </div>
        </div>
      </div>
    </div>
    );
  };

  export default TestimonialsComponent;