import Image from "next/image";
export default function Hero() {
  return (
    <div className="bg-chlorelief-springwood flex justify-end flex-col-reverse sm:h-[130vh] sm:flex-col-reverse md:flex-col-reverse md:h-[120vh] lg:flex-row lg:h-screen">
      <div className="flex flex-col text-slate-300 text-lg items-center text-end justify-center w-full md:h-full xl:items-end">
        <h1 className="text-white text-4xl font-extrabold py-14 -mt-20 text-center">Your first line of defense</h1>
        <span>Lorem ipsum dolor sit eamet Lorem</span>
        <span>ipsum dolor sit Lorem ipsum dolor sit</span>
        <span>Lorem ipsum dolor sit eamet Lorem</span>
        <span>ipsum dolor sit Lorem ipsum dolor</span>
        <span>sitametamet</span>
        <button className="my-10 text-center font-light text-slate-300 font-saira condensed text-md border-2 border-red-500 rounded-lg px-28 mx-2 py-2 w-50 hover:bg-red-500 duration-200">
          Learn more
        </button>
      </div>
      <div className="w-full flex justify-center">
      <Image
        src="/assets/Group 70.png"
        width={400}
        height={500}
        className="lg:w-full md:w-4/6 sm:w-5/6 "
        alt="product picture"
      />
      </div>
     
    </div>
  );
}
