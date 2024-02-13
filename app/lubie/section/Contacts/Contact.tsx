import Socials from "@/app/apexpoint/section/footer/_modules/Socials";


import {
  contactDataType,
  contactData,
} from "@/components/data/apexpoint/contactData";
import Image from "next/image";
type ContactProps = {
  variant: "chlorelief" | "lubie";
};
const Contact: React.FC<ContactProps> = ({ variant }) => {
  const data = contactData.map((contact: contactDataType) => {
    return (
      <div className="flex flex-col items-start justify-start lg:w-[300px]">
        <div className="flex space-x-2  justify-start">
          {<contact.icon className="text-3xl" />}

          <p className="mb-2 font-bold ">{contact.title}</p>
        </div>
        <div className="pl-10">
          {contact.information.map((details, index) => (
            <p key={index}>{details.details}</p>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div
      id="contact"
      className={`flex flex-col md:flex-row w-full justify-center items-center p-12 md:pt-[100px] md:pb-[70px] bg-lubie-white-color
      ${
        variant === "chlorelief"
          ? "text-chlorelief-springwood"
          : "text-lubie-dark-blue"
      }
      `}
    >
      <div className="md:pr-[50px] lg:pr-[100px] space-y-6  flex flex-col    lg:border-r-2 lg:border-gray-200 ">
        <div className="mb-2">
          <h2 className="text-5xl font font-bold drop-shadow-lg shadow-black mb-5">
            For Bulk Orders
          </h2>
          <p className="text-black-600 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br className="hidden sm:flex" />
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="">
          <form className="space-y-4 ">
            <div className="w-full  grid md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium "
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
                  className="block text-sm font-medium "
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
                rows={5}
                placeholder=" Message here..."
                className="w-full border-4 rounded-md mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                className={`p-2  font-bold w-[300px] rounded-lg border-box border-2 ${
                  variant === "chlorelief"
                    ? "border-chlorelief-chateaugreen text-black-200 hover:bg-chlorelief-chateaugreen"
                    : "border-lubie-dark-blue text-black-200 hover:bg-lubie-dark-blue"
                }  hover:text-white`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:mt-0 mt-12 md:flex-wrap  md:w-1/4 w-3/4 space-y-12 justify-start lg:pl-12">
        {data}

        <div className="flex pl-10 justify-start">
          <Socials
            iconColor={`${
              variant === "chlorelief"
                ? "text-chlorelief-springwood"
                : "text-lubie-dark-blue"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
