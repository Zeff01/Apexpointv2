import LubieCard from "../components/LubieCard";

const Products = () => {
  return (
    <section
      id="products"
      className="w-full flex flex-col justify-center items-center md:h-[80vh] h-[190vh] md:mt-[80vh] mt-[20vh] font-ubuntu "
    >
      <div className=" ">
        <div className="  w-full flex flex-col items-center  ">
          <h1 className=" md:text-5xl text-4xl  font-extrabold lg:text-4xl drop-shadow-md ">
            Our Products
          </h1>
          <p className="text-sm  text-lubie-dark-blue text-center py-8 w-[60%]">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
            sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
            dolor sitametamet
          </p>
        </div>

        {/* Items Sections */}
        <div className="md:flex-row flex-col flex justify-between  w-full gap-10  ">
          <LubieCard
            title="10ml Lubie"
            imageUrl="assets/lubie-10ml.png"
            price="₱32"
          />

          <LubieCard
            title="35ml Lubie"
            imageUrl="assets/lubie-35ml.png"
            price="₱132"
          />

          <LubieCard
            title="100ml Lubie"
            imageUrl="assets/lubie-100ml.png"
            price="₱420"
          />
        </div>
      </div>
    </section>
  );
};
export default Products;
