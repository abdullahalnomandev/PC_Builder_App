import { IProduct } from "@/types/product";
import { Button, Card, Col, Divider, Rate } from "antd";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/hook";
import { addToProductList } from "@/redux/features/product/productSlice";
const { Meta } = Card;
interface IProps {
  product: IProduct;
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const ProductCard = ({ product }: IProps) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleAddToBuilder = () => {
    // Dispatch the action to add the product to the product list
    dispatch(
      addToProductList({
        name: product?.productName,
        price: product?.price,
        image: product?.image,
        category: product?.category
      })
    );

    // Navigate to the '/pc-builder' route
    router.push("/pc-builder");
  };

  const handleImageClick = ()=>{

  }
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
  
      >
        <Link href={`/product-details/${product?._id}`}>
          <Image
            src={
              product?.image.startsWith("https")
                ? product?.image
                : "https://www.startech.com.bd/image/cache/catalog/processor/AMD/ryzen-3-4100/amd-ryzen-3-4100-01-228x228.jpg"
            }
            height={400}
            width={500}
            alt=""
            layout="responsive"
          />
          <Meta
            title={product.productName}
            description={`Category : ${product?.category.toUpperCase()}`}
          />

          <ul className="text-gray-400 pl-4 pt-2">
            <li>{product?.keyFeatures?.brand}</li>
            <li>{product?.keyFeatures?.model}</li>
            <li>{product?.keyFeatures?.specification}</li>
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
          <div className="text-center mt-2"></div>
        </Link>
        <div className="text-center">
          <Button type="primary" onClick={handleAddToBuilder}>
            Add To Builder
          </Button>
        </div>
      </Card>
    </Col>
  );
};

export default ProductCard;
