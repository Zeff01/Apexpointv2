import React from 'react'


// interface Contacts {
//     name: string;
//     email: string;
//     message: string;
//   }
  
export default function Contacts() {
    return (
        <div className="w-full max-w-lg mx-auto">
          <div className="text-center pt-5 mx-5">
        <span className="text-black font-bold text-2xl ">
        Thank you for your interest in Chlorelief. Send us a message for questions or report a technical problem. 
        </span>
      </div>
          <form >
            <div className="m-4">
             
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                id="name"
                required
                className="mt-2 pl-3  block min-w-full h-10 sm:text-sm  rounded-md"
                
              />
            </div>
            <div className="m-4">
              
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                id="email"
                className="mt-2 pl-3  block min-w-full h-10 sm:text-sm  rounded-md"
           
              />
            </div>
            <div className="m-4">
              
              <input
                type="text"
                placeholder="Contact Number"
                name="contact"
                required
                id="contact"
                className="mt-2 pl-3  block min-w-full h-10 sm:text-sm  rounded-md"
        
              />
            </div>
            <div className="m-4">
              
              <textarea
             required
                name="message"
                placeholder="Message"
                id="message"
                className="mt-3 pl-3  resize-none min-w-full md:w-56e rounded-md"
                style={{paddingTop:5}}
                rows={6}
                           
              />
            </div>
            <div className="m-4 flex justify-center">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-lime-700 hover:bg-lime-500 "
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      );
    };
