import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
import { Divider, List, Typography } from "antd";

const PcBuilder = () => {
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];
    return (
      <div className="mx-6">
        <Divider orientation="left">Build your own PC</Divider>
        <List
          size="large"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};