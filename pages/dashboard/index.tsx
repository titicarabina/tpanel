import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import type { NextPage } from "next";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import StatsComponent from "../../components/StatsComponent";

const Index: NextPage = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div className="">
        <h1 className="md:text-6xl text-3xl font-bold mt-10 shadow-sm ml-10 mb-10">
          <span className="text-blue-600">Panou</span> principal
        </h1>
        <div className="md:flex">
          <div className="flex flex-col">
            <LineChart />
            <StatsComponent />
          </div>
          <div className="flex flex-col">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
