import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
import { Button, Card, Divider, Skeleton } from "antd";
import Image from 'next/image';
import { DeleteOutlined } from '@ant-design/icons';
import storageDevice from "@/assets/images/device.jpg";
export const features = [
  {
    id: 1,
    name: "CPU / Processor",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cooler-48x48.webp"
  },
  {
    id: 2,
    name: "Motherboard",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/motherboard-48x48.webp"
  },
  {
    id: 3,
    name: "RAM",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ram-48x48.webp"
  },
  {
    id: 4,
    name: "Power Supply Unit",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp"
  },
  {
    id: 5,
    name: "Storage Device",
    image: storageDevice
  },
  {
    id: 6,
    name: "Monitor",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp"
  }

];

const PcBuilder = () => {


    return (
      <div className="md:mx-24 sm:max-w-full mb-6 ">
        <Divider orientation="left">PC Builder </Divider>
        <Card bodyStyle={{ padding: "12px" }}>
          <div className="flex justify-between items-center">
            <p className="text-blue-900 text-lg font-bold">
              PC Builder - Build your own PC
            </p>
            <Button type='link'>Total: $10000</Button>
          </div>
          {features?.map(({ image, name, id }) => (
            <div key={id}>
              <Card
                hoverable
                style={{ marginTop: "20px" }}
                bodyStyle={{ padding: "12px" }}
              >
                <div className="flex justify-between items-center">
                  <div className="product-content flex justify-center items-center gap-4">
                    <Image
                      src={image}
                      height={50}
                      width={50}
                      alt=""
                      // layout="responsive"
                    />
                    <div className="description">
                      <h4>{name}</h4>
                      {/* <p className="">Lorem ipsum dolor sit amet.</p> */}
                      <Skeleton.Input
                        active={false}
                        size="small"
                        block={false}
                        className="md:w-80 w-20"
                      />
                    </div>
                  </div>

                  <div className="choose-content flex justify-center items-center gap-6">
                    <h3> $5555</h3>
                    <DeleteOutlined className="text-red-600 text-lg cursor-pointer" />
                    <Button type="default">Choose</Button>
                  </div>
                </div>
              </Card>
            </div>
          ))}
          <Button className='float-right my-4' type='primary' disabled={false}>Complete Build </Button>
        </Card>
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