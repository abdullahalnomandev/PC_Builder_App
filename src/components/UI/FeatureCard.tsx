/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Card, Col, Row } from "antd";
import Link from "next/link";
import { features } from "@/data/data";
const { Meta } = Card;

const FeatureCard = () => {

  return (
    <>
      <Row gutter={[16, 16]}>
        {features.map(({ name, image, id,route }) => (
          <Col
            key={id}
            xs={{ span: 24 }}
            lg={{ span: 8 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xl={{ span: 6 }}
          >
            <Link href={route }>
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
