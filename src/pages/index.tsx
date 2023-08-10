import RootLayout from '@/components/Layouts/RootLayout';
import CarouselPage from '@/components/UI/Caroursel';
import React from 'react';
import FeatureCard from '@/components/UI/FeatureCard';
import cpuData from "@/db.json";
import { Row } from 'antd';
import ProductCard from '@/components/UI/ProductCard';
const cpuDataInfo = cpuData?.filter((cpu) => cpu.category === "cpu");

const HomePage = () => {
  return (
    <>
      <CarouselPage />

      <div className="mx-6 mb-8 ">
        <div className="hidden md:block "></div>
        <div className="product mt-8">
          <Row gutter={[16, 16]}>
            {cpuDataInfo.map((cpu, index) => (
              <>
                <ProductCard product={cpu} key={index + 1} />
              </>
            ))}
          </Row>
        </div>
        <div className="feature mt-12">
          <h4 className="py-2 text-lg  text-blue-950">Categories </h4>
          <FeatureCard />
        </div>
      </div>
    </>
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