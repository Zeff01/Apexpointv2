import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import man from "@/public/assets/man.png";
import man1 from "@/public/assets/man-1.png";
import woman from "@/public/assets/woman.png";
const Testimonials = () => {
  const user = [
    {
      name: "Lorem Ipsum",
      img: man,
      review:
        " sequi itaque quos consequuntur corporis, cupiditate dolorem esse! Sit, nostrum praesentium. Libero numquam voluptates sit culpa cum saepe unde error, corporis eos esse distinctio ducimus voluptas commodi dignissimos!",
    },
    {
      name: "Lorem Ipsum",
      img: man1,
      review:
        " sequi itaque quos consequuntur corporis, cupiditate dolorem esse! Sit, nostrum praesentium. Libero numquam voluptates sit culpa cum saepe unde error, corporis eos esse distinctio ducimus voluptas commodi dignissimos!",
    },
    {
      name: "Lorem Ipsum",
      img: "/assets/man.png",
      review:
        " sequi itaque quos consequuntur corporis, cupiditate dolorem esse! Sit, nostrum praesentium. Libero numquam voluptates sit culpa cum saepe unde error, corporis eos esse distinctio ducimus voluptas commodi dignissimos!",
    },
    {
      name: "Lorem Ipsum",
      img: woman,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.  sequi itaque quos  voluptas commodi dignissimos!",
    },
  ];

  return (
    <div className="py-10">
      <h2 className="text-center text-chlorelief-primary-green font-bold md:text-5xl text-2xl">
        Customer Reviews
      </h2>
      <div className="flex flex-wrap md:flex-row justify-around items-center px-10 py-10">
        {user.map((d, index) => (
          <div className="w-80 md:h-96 md:w-96 bg-green-500 p-4 rounded mb-4 mx-4 text-xs md:text-base ">
            <div className="flex justify-center">
              <div className="flex justify-center flex-col items-center">
                <Image
                  src={d.img}
                  alt={d.name}
                  width={80}
                  height={20}
                  className="py-2"
                />
                <h2 className="text-white font-bold">{d.name}</h2>
                <div className="flex justify-center">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                </div>
              </div>
            </div>

            <div className="md:mt-10">
              <p className="font-bold text-white">{d.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
