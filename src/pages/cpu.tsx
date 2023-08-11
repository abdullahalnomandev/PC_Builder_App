import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import ProductCard from "@/components/UI/ProductCard";
import { Row } from "antd";
import { IProduct } from "@/types/product";

interface IProps {
  products: IProduct[];
}
const CpuPage = ({ products }: IProps) => {
  return (
    <div className="mx-4 my-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-950 font-sans">
        {" "}
        CPU
      </h1>
      <Row gutter={[16, 16]}>
        {products.map((cpu, index: number) => (
          <>
            <ProductCard product={cpu} key={index} />
          </>
        ))}
      </Row>
    </div>
  );
};

export default CpuPage;

CpuPage.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/product?category=cpu");
  const data = await res.json();
  return {
    props: {
      cpuData: data as IProduct[]
    }
  };
};
