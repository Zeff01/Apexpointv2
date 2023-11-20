// import "../styles/products.css";
const Products = () => {
  return (
    <div className="bg-lubie-gray-white h-[100vh] w-full" ></div>
//     <section className=" bg-lubie-gray-white h-100vh">
//       <div className="container px-6 py-10 mx-auto  ">
//         <div className="text-center">
//           <h1 className=" text-3xl font-lubie-header text-lubie-dark-blue font-semibold lg:text-4xl ">
//             Hello products
//           </h1>
//           <p className="font-lubie-text text-lubie-dark-blue text-center py-3 ">
//             {" "}
//             Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum dolor
//             sit Lorem ipsum dolor sit amet Lorem ipsum dolor sit Lorem ipsum
//             dolor sitametamet
//           </p>
//         </div>
//         <div className="flex flex-row  text-lubie-dark-blue justify-center ">
//           <div>
//             <div className="flex mr-5 bg-lubie-gray-white basis-1/4 justify-center border-r-5 drop-shadow-lg">
//               <img
//                 className="drop-shadow-2xl"
//                 src="assets/lubie-10ml.png"
//                 alt="lubie-10ml sachet"
//               />
//             </div>
//             <div className="mt-5">
//               <p>
//               10ml Lubie
//               </p>
//               <p>
//               QUANTITY : 10 ML
//               </p>
//               <div className="flex items-center mt-2">
//     <svg className="w-4 h-4 text-lubie-green-light drop-shadow-md ms-1 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg className="w-4 h-4 text-lubie-green-light drop-shadow-mdms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg className="w-4 h-4 text-lubie-green-light drop-shadow-md ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg className="w-4 h-4 text-lubie-green-light drop-shadow-md ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
//     <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//     </svg>
// </div>
//             </div>
//           </div>

//           <div className="flex mr-5 bg-lubie-gray-white basis-1/4 justify-center  drop-shadow-lg">
//             <img
//               className="drop-shadow-2xl "
//               src="assets/lubie-100ml.png"
//               alt="lubie-10ml sachet"
//             />
//           </div>
//           <div className="flex mr-5 bg-lubie-gray-white basis-1/4 justify-center drop-shadow-lg">
//             <img
//               className="drop-shadow-2xl"
//               src="assets/lubie-35ml.png"
//               alt="lubie-10ml sachet"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
  )
}

export default Products;