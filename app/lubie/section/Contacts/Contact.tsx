import React from "react";
import Button from "../../_modules/button";

export default function ContactSection() {
  return (
    <>
      <div
        id="contact"
        className="flex flex-col md:flex-row w-full min-h-screen h-full justify-center items-center "
      >
        <div className=" w-full space-y-6 mt-10  flex flex-col items-center border-gray-200 rounded-lg p-12 border-box border-2">
          <div className="w-3/4">
            <h2 className="text-3xl font-bold">For Bulk Orders</h2>
            <p className="text-black-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="w-3/4">
            <form className="space-y-4">
              <div className="w-full  grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="ex. Anna"
                    className="mt-1 p-2 w-full border-4 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="ex. Reyes"
                    className="mt-1 p-2 w-full border-4 rounded-md"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="ex. anna@example.com"
                    className="mt-1 p-2 w-full border-4 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-black-600"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    id="contact"
                    name="contact"
                    placeholder="ex. +6391235487262"
                    className="mt-1 p-2 w-full border-4 rounded-md"
                  />
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder=" Message here..."
                  className="w-full border-4 rounded-md"
                />
              </div>
              <div className="flex justify-center">
                <Button title=" Send message " />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:mt-0 mt-12 md:flex-wrap h-[60%] md:w-1/4 w-3/4 space-y-12 justify-center items-center  border-left  md:border-l-2 border-l-0 md:border-t-0 border-t-2">
          <div className="flex flex-col items-start ">
            <div className="flex space-x-2  justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <p className="mb-2 font-bold dark:text-black">Address</p>
            </div>
            <div className="pl-12">
              <p className="text-black-500 dark:text-black-200">
                Lorem ipsum dolor <br /> sit amet, consectetur.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start ">
            <div className="flex space-x-2  justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <p className="mb-2 font-bold dark:text-black">Phone</p>
            </div>
            <div className="pl-12 ">
              <p className="text-black-500 dark:text-black-200">
                Lorem ipsum dolor <br /> sit amet, consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
