"use client";

import React, { useState } from "react";
import Image from "next/image";

// img
import apexLogo from "@/public/assets/apexpoint-name.png";
import chloreliefLogo from "@/public/assets/chlorelief-logo.png";
import lubieLogo from "@/public/assets/lubie-name.png";

// component
import Burger from "./burger/Burger";
import Navigation from "./navs/Navigation";
import SmallNavs from "./navs/SmallNavs";
import Logo from "./logo/Logo";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-lg md:shadow-none fixed flex w-full justify-between items-center px-12 h-[10vh] z-[9999]">
      <Logo apexLogo={apexLogo} />
      <Burger nav={nav} setNav={setNav} />
      <Navigation />
      <SmallNavs
        nav={nav}
        apexLogo={apexLogo}
        chloreliefLogo={chloreliefLogo}
        lubieLogo={lubieLogo}
      />
    </nav>
  );
};

export default Navbar;
