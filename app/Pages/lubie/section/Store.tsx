import { mercury, rose,lazada_store, shopee_store, snr, watsons} from '@/public/assets/lubie'
import Image from 'next/image'

export default function StoreSection() {
return (
    <div className='mt-72 flex flex-col  justify-center items-center'>
        <hr className="w-11/12 h-0.5 mx-2 my-6 bg-gray-300"></hr>
        <div className='text-4xl text-lubie-light-blue'>Available Stores</div>
        <div className='px-5 md:px-0 md:flex md:flex-row grid grid-cols-2 justify-center items-center gap-x-5 gap-y-5  py-10  '>
            <Image
                                src={mercury}
                                alt='herlubie'
                                className=' object-contain opacity-50 '
                                
                            />
                            <Image
                                src={snr}
                                alt='herlubie'
                                className=' object-contain opacity-50'
                                
                            />
                            <Image
                                src={watsons}
                                alt='herlubie'
                                className=' object-contain opacity-50 '
                                
                            />
                            <Image
                                src={lazada_store}
                                alt='herlubie'
                                className=' object-contain opacity-50 '
                                
                            />
                            <Image
                                src={rose}
                                alt='herlubie'
                                className=' object-contain opacity-50 '
                                
                            />
                            <Image
                                src={shopee_store}
                                alt='herlubie'
                                className=' object-contain opacity-50 '
                                
                            />
        </div>
    </div>

)

}
