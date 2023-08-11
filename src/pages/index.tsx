import RootLayout from '@/components/Layouts/RootLayout';
import CarouselPage from '@/components/UI/Caroursel';
import React from 'react';
import FeatureCard from '@/components/UI/FeatureCard';
import { Row } from 'antd';
import ProductCard from '@/components/UI/ProductCard';
import { IProduct } from '@/types/product';

interface HomePageProps {
  products: IProduct[];
}
const HomePage = ({products}:HomePageProps) => {
   
  const uniqueCategory = new Set();
  const filterProducts = products.filter(({category})=>{
      if(!uniqueCategory.has(category)){
          uniqueCategory.add(category)
          return true
      }
      return false;
  })

  
  return (
    <>
      <CarouselPage />

      <div className="mx-6 mb-8 ">
        <div className="hidden md:block "></div>
        <div className="product mt-8">
          <Row gutter={[16, 16]}>
            {filterProducts?.map((cpu, index: number) => (
              <>
                <ProductCard product={cpu} key={index} />
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

export const getStaticProps = async () => {
  
  const categories = [
    "cpu",
    "monitor",
    "motherboard",
    "ram",
    "power-supply",
    "storage-device",
    "others"
  ];
  let allProduct = [] as IProduct []
    for (const category of categories) {
      const res = await fetch(
        `https://backend-pc-builder.vercel.app/products?category=${category}`
      );
      const products = await res.json();

      products.forEach((product: IProduct) => {
        allProduct.push(product as IProduct);
      });
    }

  return {
    props: {
      products: allProduct as IProduct[]
    }
  };
};
