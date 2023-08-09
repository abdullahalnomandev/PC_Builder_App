import React from "react";
import { Carousel } from "antd";
import firstBanner from '@/assets/images/CUSTOM-PC-BANNER.jpg'
import secondBanner from '@/assets/images/Second.jpeg'
import Image from "next/image";

const CarouselPage: React.FC = () => (
  <Carousel autoplay>
    <div>
      <Image
        src={firstBanner}
        height={400}
        width={500}
        alt=""
        layout="responsive"
      />
    </div>
    <div>
      <Image
        src={secondBanner}
        height={400}
        width={500}
        alt=""
        layout="responsive"
      />
    </div>

  </Carousel>
);

export default CarouselPage;
