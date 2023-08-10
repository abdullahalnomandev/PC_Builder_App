import React from "react";
import { Carousel } from "antd";
import banner from "@/assets/images/tomi.jpg";
import Image from "next/image";

const CarouselPage: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image
        src={banner}
        height={200}
        width={`${500}`}
        alt=""
        layout="responsive"
      />
    </div>
    <div>
      <Image
        src={banner}
        height={400}
        width={500}
        alt=""
        layout="responsive"
      />
    </div>
  </Carousel>
);

export default CarouselPage;
