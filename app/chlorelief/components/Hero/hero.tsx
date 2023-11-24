





export default function Hero(){

    return(
    
    <div className="flex items-center justify-center flex-wrap mb-5" style={{ backgroundColor: '#419F59' }}>
            <div className=" flex flex-col items-center">
                <h1 className="text-6xl font-extrabold font-saira condensed text-white leading-[124.346%]">
                    YOUR FIRST <br />LINE OF <span style={{ color: '#FF514E' }}>DEFENSE</span>
                </h1>
                    <button className="mt-5 text-center font-extrabold text-white font-saira condensed text-lg leading-6 bg-red-500 p-3 px-4 w-50 leading-[124.346%]">
                        Add to your cart
                    </button>
            </div>
                    <img
                    src="/assets/flower.png"
                    className="flex"
                    alt="babypic"
                    style={{ maxWidth: '100%', marginBottom: '10px', marginLeft: '0' }}
                    />

    </div>

        

    )

}