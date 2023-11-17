import React from 'react'
import Image from 'next/image'

function image() {
    const grayscaleStyle = {
        filter: 'grayscale(100%)',
      };
  return (
   <div className='flex flex-row justify-center items-center px-auto'>
   <div className="image-container" style={grayscaleStyle}>
   <Image
     src="/assets/logos/mercury-logo.png"
     width={400}
     height={500}
     alt='mercury logo'
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
     layout="responsive"
     />
   </div>
   <div className="image-container px-7" style={grayscaleStyle}>
   <Image
     src="/assets/logos/lazada-logo.png"
     width={400}
     height={500}
     alt='lazada logo'
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
     layout="responsive"
     />
   </div>
   <div className="image-container px-7" style={grayscaleStyle}>
   <Image
     src="/assets/logos/watsons-logo.png"
     width={400}
     height={500}
     alt='lazada logo'
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
     layout="responsive"
     />
   </div>
   <div className="image-container" style={grayscaleStyle}>
   <Image
     src="/assets/logos/rose-pharmacy-logo.png"
     width={400}
     height={500}
     alt='rose pharmacy logo'
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
     layout="responsive"
     />
   </div>
   <div className="image-container px-7" style={grayscaleStyle}>
   <Image
     src="/assets/logos/shopee-logo.png"
     width={400}
     height={500}
     alt='shopee logo'
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 10vw"
     layout="responsive"
     />
   </div>
 </div>
  )
}

export default image