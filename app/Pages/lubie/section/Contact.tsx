import React from 'react'

export default function ContactSection() {
    return (

        <>
      <div id='contact' className="flex flex-col md:flex-row w-full h-[100vh] justify-center items-center">
        <div className="md:w-1/2 w-full flex flex-col items-center space-y-6 mt-12 ">
            <div className="w-3/4">
                <h2 className=" text-3xl font-bold ">For Bulk Orders</h2>
                <p className="text-black-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="w-3/4 ">
                <form className="space-y-4 ">
                        <div className="grid grid-cols-2 gap-x-12">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                                <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                                <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-x-10 ">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-black-600">Email Address</label>
                                <input type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-black-600">Contact Number</label>
                                <input type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" />
                            </div>
                        </div>

                        <div className="">
                            <label htmlFor="message" className="block text-sm font-medium text-black-600">Message</label>
                            <textarea id="message" name="message" rows={5} className=" w-full border rounded-md" />
                        </div>

                        <div className="flex justify-center">
                            <button className="bg-white border-4 border-black-500 text-black-500 font-bold py-2 px-12 rounded-lg bg-transparent ">
                                SEND
                            </button>
                        </div>
                </form>
          </div>
        </div>

          <div className="flex flex-col md:mt-0 mt-12 md:flex-wrap h-[60%] md:w-1/4 w-3/4  space-y-12 justify-center items-center  border-left  md:border-l-2 border-l-0 md:border-t-0 border-t-2">

            <div className="flex flex-col pr-[3.1rem] mt-12">
                  <div className="flex  space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        <p className="font-bold dark:text-black">
                            Online Stores
                        </p>
                  </div>
                <div className="pl-12  ">
                    <p className="text-black-500 dark:text-black-200">
                        • Shopee Link
                    </p>
                    <p className="text-black-500 dark:text-black-200">
                        • Shopee Link
                    </p>
                </div>


            </div>
            <div className="flex flex-col items-start ">
                  <div className="flex space-x-2  justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                        </svg>
                        <p className="mb-2 font-bold dark:text-black">
                            Address
                        </p>
                  </div>
                <div className="pl-12">
                    <p className="text-black-500 dark:text-black-200">
                        Lorem ipsum dolor <br/> sit amet, consectetur.
                    </p>

                </div>


            </div>
            <div className="flex flex-col items-start ">
                  <div className="flex space-x-2  justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                            </svg>
                        <p className="mb-2 font-bold dark:text-black">
                            Phone
                        </p>
                  </div>
                <div className="pl-12 ">
                    <p className="text-black-500 dark:text-black-200">
                        Lorem ipsum dolor <br/> sit amet, consectetur.
                    </p>

                </div>


            </div>


    </div>

</div>
      <div className="w-full md:h-0 h-[15vh]"></div>
      </>

    )
  }
