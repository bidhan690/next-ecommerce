import React from "react";
import ShopImage from "./ShopImage";
export default function Shop() {
  return (
    <div className="pt-12 h-full w-full">
      <div className="text-3xl font-bold text-center pt-20">
        <h1 className="font-oxygen">Shop By Category</h1>
      </div>
      <div className="text-xl font-semibold text-center my-4">
        <h2 className="font-andika">Our Products</h2>
      </div>
      <div className="">
        <div className="flex justify-center mx-2">
          <div className="grid grid-cols-1 gap-12 sm:gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-8  ">
            <ShopImage
              src="https://iili.io/HOx2hNt.jpg"
              alt="featured_image"
              name="Men's Fashion"
            />
            <ShopImage
              src="/assets/logo.svg"
              alt="featured_image"
              name="Women's Fashion"
            />
            <ShopImage
              src="/assets/logo.svg"
              alt="featured_image"
              name="groceries"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
