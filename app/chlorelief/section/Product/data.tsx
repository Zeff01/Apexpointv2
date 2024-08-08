import React from "react";
import { motion } from "framer-motion"
import { SocialStagger, fadeInOutDownToUp } from "@/components/animation/animation";
import Image from "next/image";

interface ProductProps {
  ImageUrl: string;
  ProductDesc1: string;
  ProductDesc2: string;
  Rating: string;
  Price: string;
}

const ProductComponent: React.FC<ProductProps> = ({
  ImageUrl,
  ProductDesc1,
  ProductDesc2,
  Rating,
  Price,
}: ProductProps) => {
  return (
    <motion.main
      variants={fadeInOutDownToUp}
      className="flex flex-col gap-2 h-full">
      <div className="relative mt-4 h-56 lg:h-[336px] rounded-lg shadow-md flex justify-center bg-chlorelief-springwood">
        <Image
          className="object-contain p-3 md:p-4 lg:px-4 lg:py-10"
          fill
          src={ImageUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Product Image"
        />
      </div>
      <div className="px-3 sm:px-6 py-2 flex gap-4 justify-between rounded-lg bg-gray-100 text-gray-600 shadow-md sm:flex">
        <div className="text-sm w-[200px]">
          <h3>{ProductDesc1}</h3>
          <h3>{ProductDesc2}</h3>
          <p className="text-green-400 text-3xl">{Rating}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-3xl w-24 text-end">
            {Price}
          </p>
        </div>
      </div>
    </motion.main>
  );
};
//☆☆☆☆ star backup
const ProductList: React.FC = () => {
  // Example data for four products
  const productsData: ProductProps[] = [
    {
      ImageUrl: "/assets/chlorelief-assets/antiseptic-150ml.png",
      ProductDesc1: "ChloRelief Anti Itch And",
      ProductDesc2: "Antiseptic Wash 60ml",
      Rating: "★★★★★★",
      Price: "₱ 59",
    },
    {
      ImageUrl: "/assets/chlorelief-assets/alcohol-150ml.png",
      ProductDesc1: "ChloRelief Anti Itch And",
      ProductDesc2: "Santizer 60ml",
      Rating: "★★★★★★",
      Price: "₱ 99",
    },
    {
      ImageUrl: "/assets/chlorelief-assets/calamine-60ml.png",
      ProductDesc1: "ChloRelief Anti Itch And ",
      ProductDesc2: "Anti Rash Lotion 60ml",
      Rating: "★★★★★★",
      Price: "₱ 210",
    },
    {
      ImageUrl: "/assets/chlorelief-assets/calamine-120ml.png",
      ProductDesc1: "ChloRelief Anti Itch And",
      ProductDesc2: "Anti Rash Lotion 120ml",
      Rating: "★★★★★★",
      Price: "₱ 420",
    },
    {
      ImageUrl: "/assets/chlorelief-assets/babywash-150ml.png",
      ProductDesc1: "ChloRelief 2in1 Baby Wash",
      ProductDesc2: "With Virgin Coconut Oil 150ml",
      Rating: "★★★★★★",
      Price: "₱ 149",
    },
  ];

  return (
    <motion.div
      variants={SocialStagger}
      initial="hidden"
      whileInView="visible"
      // className={`grid gap-4 grid-cols-1 sm:grid-cols-2 sm:px-4 md:grid-cols-2 md:px-20 lg:grid-cols-3`}>
      className={`flex flex-wrap gap-4 justify-center max-w-[1114px]`}>
      {productsData.map((product, index) => (
        <ProductComponent key={index} {...product} />
      ))}
    </motion.div>
  );
};

export default ProductList;
