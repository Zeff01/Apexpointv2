





export default function Hero(){

    return(
        // <div className="bg-green-600 h-64 flex items-center justify-center">
        //     <div className="flex items-center">
        //         <img src="/assets/baby.png" 
        //         alt="babypic"
        //         style={{ maxWidth: '100%', marginBottom: '10px' }} />
        //         <h2 className="text-2xl font-bold">YOUR FIRST LINE OF DEFENSE</h2>
        //         <img src="/assets/all.png" 
        //         alt="all"
        //         style={{ maxWidth: '100%', marginBottom: '10px' }} />
        //         <h2>Relieves itch and Rash</h2>
        //     </div>
        // </div>
        <div className="bg-green-600 flex items-center justify-center flex-wrap">
            <img
                src="/assets/baby.png"
                className="mx-auto"
                alt="babypic"
                style={{ maxWidth: '100%', marginBottom: '10px', marginLeft:'0'}}
            />
           
                <h1 className="text-4xl text-white font-bold mx-auto">YOUR FIRST LINE OF DEFENSE</h1>
                <img
                    src="/assets/all.png"
                    alt="all"
                    style={{ maxWidth: '100%', marginBottom: '10px' }}
                />
                <h1 className="text-4xl text-white font-bold mx-auto">Relieves itch and Rash</h1>
            
        </div>

        // <div className="bg-green-600 flex flex-col md:flex-row items-center justify-center">
        //     <img
        //         src="/assets/baby.png"
        //         className="mx-auto md:ml-0 md:mr-4 mb-4 md:mb-0"
        //         alt="babypic"
        //         style={{ maxWidth: '100%' }}
        //     />
        //     <div className="text-center">
        //         <h2 className="text-2xl font-bold text-blue-500 mb-4 md:mb-0">YOUR FIRST LINE OF DEFENSE</h2>
        //         <img
        //             src="/assets/all.png"
        //             alt="all"
        //             className="max-w-full mb-4"
        //         />
        //         <h2 className="text-green-800">Relieves itch and Rash</h2>
        //     </div>
        // </div>

    )

}