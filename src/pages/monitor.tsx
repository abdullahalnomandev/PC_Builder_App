import RootLayout from "@/components/Layouts/RootLayout";
import CarouselPage from "@/components/UI/Caroursel";
import React from "react";
import FeatureCard from "@/components/UI/FeatureCard";
import { Row } from "antd";
import ProductCard from "@/components/UI/ProductCard";
import { IProduct } from "@/types/product";

interface IProps {
  products: IProduct[];
}
const MonitorPage = ({ products }: IProps) => {
  return (
    <>
      <div className="mx-6 mb-8 ">
        <div className="hidden md:block "></div>
        <div className="product mt-8">
          <Row gutter={[16, 16]}>
            {products?.map((monitor, index: number) => (
              <>
                <ProductCard product={monitor} key={index} />
              </>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default MonitorPage;


export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-pc-builder.vercel.app/products?category=monitor"
  );
  const data = await res.json();
  return {
    props: {
      products: data as IProduct[]
    }
  };
};
