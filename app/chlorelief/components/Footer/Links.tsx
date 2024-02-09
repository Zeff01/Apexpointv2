import {
  phone,
  email,
  shoppingbag,
  lazada,
  facebook,
  tiktok,
  instagram,
  linkedin,
  twitter,
  apexsmall,
  mercury,
  rose,
  lazada_store,
  shopee_store,
  snr,
  watsons,
} from "@/public/assets/lubie";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

interface Store {
  name: string;
  img: StaticImageData;
}

interface Company {
  stores: Store[];
  socialicons: SocialIcon[];
}
interface SocialIcon {
  icon: IconType; // Use IconType from 'react-icons' for better type definition
  url: string;
}

interface FooterProps {
  companies: Company[];
  backgroundColor: string;
}
export default function FooterSection({
  companies,
  backgroundColor,
}: FooterProps) {
  return (
    <section>
      {companies.map(({ stores, socialicons }, index) => (
        <div key={index}>
          <div className="flex justify-between p-12 ">
            {stores.map(({ img, name }, storeIndex) => (
              <Image
                className="grayscale object-contain"
                src={img}
                alt={name}
                width={130}
                height={80}
                key={storeIndex}
              />
            ))}
          </div>

          <div className={`${backgroundColor} text-white`}>
            <div className="flex justify-between mx-auto md:px-[300px] pt-12 pb-12">
              <ul>
                <li>
                  <p className="text-base">Contact Us</p>
                </li>
                <li className="flex gap-2">
                  <Image
                    src={phone}
                    alt="herlubie"
                    className=" object-contain "
                  />
                  <a href="">sample</a>
                </li>
                <li className="flex gap-2">
                  <Image
                    src={email}
                    alt="herlubie"
                    width={19}
                    height={19}
                    className=" object-contain "
                  />
                  <a href="">sample</a>
                </li>
              </ul>
              <ul>
                <li>Information</li>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Our Products</a>
                </li>
              </ul>
              <ul>
                <li>Our Shops</li>
                <li className="flex">
                  <Image
                    src={shoppingbag}
                    alt="herlubie"
                    className=" object-contain "
                  />
                  <a href="">Shopee</a>
                </li>
                <li className="flex">
                  <Image
                    src={lazada}
                    alt="herlubie"
                    className=" object-contain "
                  />
                  <a href="">Lazada</a>
                </li>
              </ul>
              <ul>
                <li>Others</li>
                <li>
                  <a href="">Supports</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Terms and Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex gap-6 justify-center">
                {socialicons.map((socialicon, iconIndex) => {
                  const Icon = socialicon.icon;
                  return (
                    <a
                      key={iconIndex}
                      href={
                        socialicon.url.includes("http")
                          ? socialicon.url
                          : `https://${socialicon.url}`
                      }
                    >
                      <Icon className="text-2xl" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-1 flex justify-center items-center ">
                <a href="#">
                  <Image
                    src={apexsmall}
                    alt="herlubie"
                    className=" object-contain "
                  />
                </a>
                <p className="text-white text-10">
                  2021 © COPYRIGHT. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
