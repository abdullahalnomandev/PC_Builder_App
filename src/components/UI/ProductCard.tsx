import { IProduct } from '@/types/product';
import { Button, Card, Col, Divider, Rate } from 'antd';
import React from 'react';
import computer from '@/assets/images/computer.jpeg'
import Image from 'next/image';
const { Meta } = Card;
interface IProps{
    product:IProduct
}

const ProductCard = ({product}:IProps) => {    
    return (
      <Col
        xs={{ span: 24 }}
        lg={{ span: 8 }}
        md={{ span: 12 }}
        sm={{ span: 12 }}
        xl={{ span: 6 }}
      >
        <Card
          className="shadow-md"
          hoverable
          cover={
            <Image
              src={computer}
              height={400}
              width={500}
              alt=""
              layout="responsive"
            />
          }
        >
          <Meta
            title={product.productName}
            description={`Category : ${product?.category.toUpperCase()}`}
          />
          <ul className="text-gray-400 pl-4 pt-2">
            <li>{product?.KeyFeatures?.brand}</li>
            <li>{product?.KeyFeatures?.model}</li>
            <li>{product?.KeyFeatures?.specification}</li>
          </ul>
          <h4
            className={`${
              product?.status === "in-stock"
                ? " text-green-600"
                : "text-red-600"
            }`}
          >
            <span className="text-gray-800"> Status : </span>
            {product?.status === "in-stock" ? "In Stock" : "Out of Stock"}
          </h4>
          <Rate disabled defaultValue={product?.individualRating} />
          <Divider />

          <h3 className="text-center pt-2 text-blue-900 text-lg">
            {product?.price}
          </h3>
        </Card>
      </Col>
    );
};

export default ProductCard;