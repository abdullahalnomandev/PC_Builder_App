/* eslint-disable @next/next/no-img-element */
import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';
import { Button, Card, Divider, Skeleton } from "antd";
import Image from 'next/image';
import { DeleteOutlined } from '@ant-design/icons';
import storageDevice from "@/assets/images/device.jpg";
import Link from 'next/link';
import { useAppSelector } from '@/redux/hook';
export const features = [
  {
    id: 1,
    name: "Processor",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cooler-48x48.webp",
    route: "cpu"
  },
  {
    id: 2,
    name: "Motherboard",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/motherboard-48x48.webp",
    route: "motherboard"
  },
  {
    id: 3,
    name: "RAM",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/ram-48x48.webp",
    route: "ram"
  },
  {
    id: 4,
    name: "Power Supply Unit",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/cpu-48x48.webp",
    route: "power-supply"
  },
  {
    id: 5,
    name: "Storage Device",
    image: storageDevice,
    route: "storage-device"
  },
  {
    id: 6,
    name: "Monitor",
    image:
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp",
    route: "monitor",
  }
];
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

const PcBuilder = () => {

  const router = useRouter()
   const  pcBuilderList = useAppSelector((state) => state.product)   
   const count = pcBuilderList?.features?.filter(({ price }) =>price !== 0 );

   const handleSuccess = () =>{
    toast.success("Successfully build!");
    setTimeout(() => {
      router.push('/')
    }, 2000);

   }
    
    return (
      <div className="md:mx-24 sm:max-w-full mb-6 ">
        <Divider orientation="left">PC Builder {count.length} </Divider>
        <Toaster />
        <Card bodyStyle={{ padding: "12px" }}>
          <div className="flex justify-between items-center">
            <p className="text-blue-900 text-lg font-bold">
              PC Builder - Build your own PC
            </p>
            <Button type="link">
              Total:$ {pcBuilderList?.totalPrice.toFixed()}
            </Button>
          </div>
          {pcBuilderList?.features.map(
            ({ title, route, price, name, image }, index) => (
              <div key={index}>
                <Card
                  hoverable
                  style={{ marginTop: "20px" }}
                  bodyStyle={{ padding: "12px" }}
                >
                  <div className="flex justify-between items-center">
                    <div className="product-content flex justify-center items-center gap-4">
                      <img
                        src={image}
                        height={50}
                        width={50}
                        alt=""
                        // layout="responsive"
                      />
                      <div className="description">
                        <h4>{title}</h4>
                        {name !== "" ? (
                          <p className="">{name}</p>
                        ) : (
                          <Skeleton.Input
                            active={false}
                            size="small"
                            block={false}
                            className="md:w-80 w-20"
                          />
                        )}
                      </div>
                    </div>

                    <div className="choose-content flex justify-center items-center gap-6">
                      <h3> {price}</h3>
                      {/* <DeleteOutlined className="text-red-600 text-lg cursor-pointer" /> */}
                      <Link href={route}>
                        <Button type="default">Choose</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            )
          )}
          <Button
            className="float-right my-4"
            type="primary"
            disabled={count?.length == 6 ? false : true}
            onClick={() => handleSuccess()}
          >
            Complete Build{" "}
          </Button>
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