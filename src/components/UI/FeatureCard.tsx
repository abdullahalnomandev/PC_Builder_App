/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Col, Row } from "antd";
import Link from "next/link";
const { Meta } = Card;
const features = [
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
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVqkREtGqyjixuDS3qz9b0MZIc6qjSEoF9g&usqp=CAU"
  },
  {
    id: 6,
    name: "Monitor",
    image:
      //   "https://www.startech.com.bd/image/cache/catalog/monitor/xiaomi/redmi/redmi-01-500x500.jpg",
      "https://www.techlandbd.com/image/cache/wp/gp/AAA-Offer/pc_builder/monitor-48x48.webp"
  },
  {
    id: 6,
    name: "Others",
    image: "https://cdn-icons-png.flaticon.com/512/8330/8330692.png"
  }
];
const FeatureCard = () => {

  return (
    <>
      <Row gutter={[16, 16]}>
        {features.map(({ name, image, id }) => (
          <Col
            key={id}
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
          >
            <Link href='/'>
              <div className="card transition flex justify-between items-center p-4 hover:shadow-xl bg-white rounded-lg shadow-md">
                <img className=" h-16 w-28 object-contain" src={image} alt="" />
                <p className="text-sm font-semibold mt-2">{name}</p>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeatureCard;
