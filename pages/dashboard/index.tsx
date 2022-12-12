import React from "react";
import SideBar from "../../components/SideBar";
import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center justify-center">
        <p className="text-xl">Dashboard Page</p>
      </div>
    </div>
  );
};

export default Index;
