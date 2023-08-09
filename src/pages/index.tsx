import RootLayout from '@/components/Layouts/RootLayout';
import CarouselPage from '@/components/UI/Caroursel';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';
import one from "../assets/images/service-new-banner-350x120.webp";
import two from "../assets/images/brand-pc-offer-350x120.webp";
import three from "../assets/images/service-new-banner-350x120.webp";
import four from "../assets/images/smart-tv-350x120.webp";


const image =[
  {id:1,url:one},
  {id:2,url:two},
  {id:3,url:three},
  {id:4,url:four},
]
const HomePage = () => {
  return (
    <div>
      <CarouselPage />
      <div className='flex justify-center items-center gap-2'>
        {image.map(({ url, id }) => (
          <>
            <Image
            key={id}
              src={url}
              height={400}
              width={500}
              alt=""
              layout="responsive"
            />
          </>
        ))}
      </div>

      <h1 className='text-3xl'>Hi There</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function (page:React.ReactNode) {

  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );

}