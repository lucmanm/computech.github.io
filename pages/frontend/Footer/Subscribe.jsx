import React from "react";
import { icons } from "../assets/data/data";

const Subscribe = () => {
  return (
    <>
      <div className="bg-black">
        <div className="dekstop:container flex flex-row flex-wrap items-center justify-center p-7">
          <div className="text-white">{icons.emailIcon}</div>
          <div className="p-x prose prose-invert px-7 prose-p:text-gray-200">
            <h2 className="m-0">Fear Of Missing Out?</h2>
            <p>Get the latest deals, updates & more</p>
          </div>
          <div className="flex justify-center space-x-4">
            <form action="">
              <span>
                <input type="text" id="" className="w-full rounded-full" />
              </span>
              <span>
                <input
                  className="btn btn-primary  rounded-full"
                  type="button"
                  value="Subscribe"
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;