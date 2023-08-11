import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";
import React from "react";
import { IProduct, IReview } from "@/types/product";
import Image from "next/image";
import { Rate } from "antd";

const productDetailsPage = ({ product }: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  let id = router.query.productId as string;


  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
        <div className="flex flex-col md:flex-row">
          <Image src={product?.image} height={250} width={300} alt="" />
          <div className="md:ml-4 mt-4 md:mt-0">
            <h1 className="text-2xl font-semibold">{product?.productName}</h1>
            <p className="text-gray-600">{product?.category}</p>
            <p
              className={`text-sm mt-2 ${
                product?.status === "In Stock"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {product?.status}
            </p>
            <p className="text-2xl font-semibold mt-2">{product?.price}</p>
            <p className="text-gray-600 mt-2">{product?.description}</p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Key Features</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <span className="font-semibold">Brand:</span>{" "}
              {product?.keyFeatures?.brand}
            </li>
            <li>
              <span className="font-semibold">Model:</span>{" "}
              {product?.keyFeatures?.model}
            </li>
            <li>
              <span className="font-semibold">Specification:</span>{" "}
              {product?.keyFeatures?.specification}
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Ratings and Reviews</h2>
          <p className="text-gray-600 mt-2">Individual Rating:</p>
          <Rate
            disabled
            defaultValue={product?.individualRating ?? 1}
            className="mb-2"
          />

          <p className="text-gray-600 mt-2">Average Rating:</p>
          <Rate
            disabled
            defaultValue={product?.averageRating ?? 1}
            className="mb-4"
          />

          <div className="mt-4">
            <h3 className="text-md font-semibold">Reviews</h3>
            {product?.reviews?.map((review: IReview, index: number) => (
              <div key={index} className="mt-2">
                <Rate disabled defaultValue={review.individualRating} />
                <p>{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetailsPage;

productDetailsPage.getLayout = function (page: React.ReactNode) {
  return (
    <>
      <RootLayout>{page}</RootLayout>
    </>
  );
};

// export const getStaticPaths = async () =>{
//     const res = await fetch(`http://localhost:5000/news`);
//     const newses = await  res.json();

//       const paths = newses.map((news) => ({
//         params: { newsId: news.id }
//       }));

//       return { paths, fallback: false }
// }


// export const getServerSideProps = async (context) =>{
//     const {params} =context;
//     const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
//     const data = await res.json();

//     return{
//         props:{
//             news:data
//         }
//     }
// }

export const getStaticPaths = async () => {
  const res = await fetch(`https://backend-pc-builder.vercel.app/products?category=cpu`
  );
  const products = await res.json();

  const paths = products?.map((product: IProduct) => ({
    params: { productId: product._id }
  }));
  return { paths, fallback: false };
};


export const getStaticProps = async (context: any) => {
  console.log("context",context);
  
  const { params } = context;
  const res = await fetch(`https://backend-pc-builder.vercel.app/product/${params.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data as IProduct
    }
  };
};
