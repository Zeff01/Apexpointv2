





export default function Hero(){

    return(
        
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

        

    )

}