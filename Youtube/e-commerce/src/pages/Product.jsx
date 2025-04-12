import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../components/DescriptionBox/DescriptionBox";
import { RelatedProducts } from "../components/Relatedproducts/Relatedproducts";

export const Product = () => {
  const { all_product } = useContext(ShopContext);
  // const { all_product } = ...: This is destructuring assignment. It extracts the all_product property from the value returned by useContext(ShopContext) and assigns it to a constant named all_product.
  const { productId } = useParams();
  //   useParams is a hook provided by React Router that allows you to access dynamic parameters from the current URL. It's particularly useful when dealing with routes that contain dynamic segments.
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  );
};
