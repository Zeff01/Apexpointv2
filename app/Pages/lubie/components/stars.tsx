import React from 'react'

interface props  {
    totalStars:number;
}

function Stars({totalStars}:props) {
  return (
    <div>
    {[...Array(totalStars)].map((_, index) => (
      <span
      className='text-[#419F59] text-2xl'
        key={index}

      >
        &#9733;
      </span>
    ))}

  </div>
  )
}

export default Stars
