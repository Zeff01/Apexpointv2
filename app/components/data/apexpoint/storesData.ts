import { StaticImageData } from "next/image";
import MercuryLogo from "@/public/assets/logos/mercury-logo.png";
import LazadaLogo from "@/public/assets/logos/lazada-logo.png";
import ShopeeLogo from "@/public/assets/logos/shopee-logo.png";
import RosePharmacyLogo from "@/public/assets/logos/rose-pharmacy-logo.png";
import WatsonsLogo from "@/public/assets/logos/watsons-logo.png";

export type StoresData = {
  name: string;
  store: StaticImageData;
};

export const storesData: StoresData[] = [
  {
    name: "Shopee Logo",
    store: ShopeeLogo,
  },
  {
    name: "Mercury Drug Logo",
    store: MercuryLogo,
  },
  {
    name: "Lazada Logo",
    store: LazadaLogo,
  },
  {
    name: "Rose Pharmacy Logo",
    store: RosePharmacyLogo,
  },
  {
    name: "Watsons Logo",
    store: WatsonsLogo,
  },
];
