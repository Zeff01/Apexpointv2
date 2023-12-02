import Image from "next/image";
import Star from "./Star";
import { TestimonialType } from "./data";

const Card: React.FC<TestimonialType> = ({
  customer_name,
  review,
  img,
  rate,
}) => {
  return (
    <div className="shadow-lg border h-[270px] w-[300px] md:w-[225px] lg:w-[300px] rounded-xl p-4 flex flex-col gap-3">
      <div className="flex justify-between">
        <Image
          src={img}
          alt={customer_name}
          className="object-contain h-14 w-14 bg-gray-300 rounded-full"
        />
        <Star rate={rate} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{customer_name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Card;
