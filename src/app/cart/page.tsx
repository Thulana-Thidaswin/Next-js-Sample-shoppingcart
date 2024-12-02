"use client";
import CartItemCard from "../../app/components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "../../../store/features/cartSlice";
import { useAppSelector } from "../../../store/store";

const cart = () => {
  const cartItems = useAppSelector(
    (state) => state.cart.cartItems
  );

  const totalPrice = useAppSelector(TotalPriceSelector);
  return (
    <div className="p-2 lg:max-w-[1440px] m-auto">
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} />
      ))}

      <p className="text-slate-600">
        Total Price:{" "}
        <span className="text-white font-bold">
          {totalPrice} $
        </span>
      </p>
    </div>
  );
};

export default cart;

