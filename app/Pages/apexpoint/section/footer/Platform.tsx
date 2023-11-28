import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Platform = () => {
  return (
    <div className="flex h-full w-full items-center justify-end text-center gap-3">
      <FaFacebook size={23} />
      <FaInstagram size={23} />
      <FaXTwitter size={23} />
      <FaLinkedin size={23} />
      <FaYoutube size={23} />
    </div>
  );
};

export default Platform;
