import React from 'react';

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
    <main className='flex flex-col gap-2  h-full'>
    <div className=' mt-4 rounded-lg shadow-md py-3  px-0 flex justify-center bg-chlorelief-springwood md:px-4 md:py-4 lg:px-auto lg:py-10'>
      <img className='h-48  lg:h-64 w-18  object-contain sm:w-full sm:px-0' src={ImageUrl} alt="Product Image" />
    </div>
    <div className='px-3 sm:px-6 py-2 flex gap-4 justify-between rounded-lg bg-gray-100 text-gray-600 shadow-md sm:flex'>
      <div className='text-sm'>
        <h3>{ProductDesc1}</h3>
        <h3>{ProductDesc2}</h3>
        <p className='text-center text-green-400 text-3xl'>{Rating}</p>
      </div>
      <div>
        <p className='font-semibold text-black text-3xl sm:w-24 text-end'>{Price}</p>
      </div>
    </div>
  </main>
  
  );
};
//☆☆☆☆ star backup
const ProductList: React.FC = () => {
  // Example data for four products
  const productsData: ProductProps[] = [

    {
      ImageUrl: '/assets/antiseptic-150ml.png',
      ProductDesc1: 'ChloRelief Anti Itch And',
      ProductDesc2: 'Antiseptic Wash 60ml',
      Rating: '★★★★★★',
      Price: 'P 59',
    },
    {
      ImageUrl: '/assets/alcohol-150ml.png',
      ProductDesc1: 'ChloRelief Anti Itch And',
      ProductDesc2: 'Santizer 60ml',
      Rating: '★★★★★★',
      Price: 'P 99',
    },
    {
      ImageUrl: '/assets/calamine-60ml.png',
      ProductDesc1: 'ChloRelief Anti Itch And ',
      ProductDesc2: 'Anti Rash Lotion 60ml',
      Rating: '★★★★★★',
      Price: 'P 210',
    },
    {
      ImageUrl: '/assets/calamine-120ml.png',
      ProductDesc1: 'ChloRelief Anti Itch And',
      ProductDesc2: 'Anti Rash Lotion 120ml',
      Rating: '★★★★★★',
      Price: 'P 420',
    },
 
  ];

  return (
    <div className="grid gap-4 place-items-center grid-cols-1 sm:grid-cols-2 sm:px-4 md:grid-cols-2 md:px-20 lg:grid-cols-2 lg:gap-auto xl:grid-cols-4">
      {productsData.map((product, index) => (
        <ProductComponent key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
