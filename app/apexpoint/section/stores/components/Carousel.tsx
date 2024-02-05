import React from "react";
import styles from "./Carousel.module.css";
import {
  StoresData,
  storesData,
} from "@/app/components/data/apexpoint/storesData";
import Image from "next/image";

const Carousel = () => {
  const storesSlider = storesData.map((store: StoresData, index) => (
    <Image key={index} src={store.store} alt={store.name} />
  ));
  return (
    <div className={styles.logos}>
      <div className={styles.logosSlide}>
        {storesSlider}
        {storesSlider}
      </div>
    </div>
  );
};

export default Carousel;
