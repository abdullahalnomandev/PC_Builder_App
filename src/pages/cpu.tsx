import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import cpuData from "@/db.json";
import ProductCard from "@/components/UI/ProductCard";
import { Row } from "antd";
const CpuPage = () => {
  const cpuDataInfo = cpuData.filter((cpu) => cpu.category === "cpu");

  return (
    <div className="mx-4 my-6">
      <h1 className="text-3xl font-semibold mb-4 text-blue-950 font-sans"> CPU</h1>
      <Row gutter={[16, 16]}>
        {cpuDataInfo.map((cpu, index) => (
          <>
            <ProductCard product={cpu} key={index + 1} />
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
