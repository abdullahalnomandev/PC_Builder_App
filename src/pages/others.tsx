import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import ProductCard from "@/components/UI/ProductCard";
import { Row } from "antd";
import { IProduct } from "@/types/product";

interface IProps {
  products: IProduct[];
}
const OthersPage = ({ products }: IProps) => {
  return (
    <div className="mx-4 my-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-950 font-sans">
        {" "}
        Others
      </h1>
      <Row gutter={[16, 16]}>
        {products.map((others, index: number) => (
          <>
            <ProductCard product={others} key={index} />
          </>
        ))}
      </Row>
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://backend-pc-builder.vercel.app/products?category=others"
  );
  const data = await res.json();
  return {
    props: {
      products: data as IProduct[]
    }
  };
};

