import React from "react";
import food from "../Images/food 1.jpg";
import payment from "../Images/food 2.jpg";

const Body = () => {
  return (
    <div>
      <div className="flex items-center mt-8">
        <div className="w-3/4 overflow-x-auto">
          <h4 className="font-bold text-base text-lg text-orange-600">
            Explore varieties
          </h4>
          <p className="text-2xl font-bold text-base">
            Shop for your favorites meal as e dey hot
          </p>
          <p className="font-bold text-base text-xs text-stone-500">
            Shop for your favorite meals or drinks and enjoy while doing it.
          </p>
        </div>
        <img src={food} alt="" />
      </div>

      <div className="flex items-center mt-8">
        <img src={payment} alt=""/>
        <div className="w-3/4 overflow-x-auto">
          <h4 className="font-bold text-base text-lg text-orange-600">
            Checkout
          </h4>
          <p className="text-2xl font-bold text-base">
            When you done check out and get it delivered.
          </p>
          <p className="font-bold text-base text-xs text-stone-500">
            When you done check out and get it delivered with ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
