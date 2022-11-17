import React from "react";
import { Navigationbar } from "./Navigationbar";
import { FrontSideNav } from "./FrontSideNav";
import { LogoAndSearch } from "./LogoAndSearch";
import { AccountLogin } from "./AccountLogin";
export const Header = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap bg-white shadow-md">
        <div className=" bg-gray-800 py-2 text-center text-slate-50">
          Free Shipping all Over Saudi Arabia
        </div>
        <LogoAndSearch />
        <div className="mx-auto flex flex-row  items-center  w-screen  desktop:container">
        <FrontSideNav/>
         <Navigationbar/>
         <AccountLogin/>
        </div>
      </div>
    </>
  );
};
