import { Product } from "../../../interfaces";
import Image from "next/image";
import React from "react";
import AddToCartBtn from "./AddToCart";
// import AddToCartBtn from "./AddToCartBtn";

interface Props {
  product: Product;
}
const ProductCard = (props: Props) => {
  return (
    <div className="border rounded-md shadow hover:shadow-lg transition overflow-hidden ">
      <div className="h-[300px] w-[300px]">
        <Image className="h-[100%] w-[100%]"
          src={props.product.image}
          width={400}
          height={300}
          alt={props.product.name}
        />
      </div>

      <div className="p-2 w-[100%] min-w-[286px] lg:min-w-[auto]">


        <h6 className="text-center text-slate-600">
          {props.product.name}
        </h6>
        <p className="text-center text-slate-600">
          {props.product.price} $
        </p>
        <AddToCartBtn product={props.product} />
      </div>
    </div>
  );
};

export default ProductCard;