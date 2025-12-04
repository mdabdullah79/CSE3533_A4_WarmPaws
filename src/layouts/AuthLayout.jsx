import React, { use } from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {

  return (
    <div className="flex">
      <div className="hidden flex-1 md:block">
        <img className="h-screen w-full" src="/assets/authcat.jpg" alt="" />
      </div>

      <div className="flex-1 bg-base-200 h-screen">
        <h1 className="text-5xl font-bold mt-20 mb-10 text-center">WarmPas</h1>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
