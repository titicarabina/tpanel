import React, { useState } from "react";
import MainTable from "../../../components/MainTable";
import RefreshData from "../../../components/RefreshData";
import SideBar from "../../../components/SideBar";
import type { NextPage } from "next";

const Index: NextPage = () => {
  const [Players, setPlayers] = useState("");
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex w-full">
      <div className="">
        <SideBar />
      </div>
      <div className="">
        <div className="m-10 flex">
          <div className="mt-20">
            <RefreshData />
          </div>
        </div>
        <MainTable />
      </div>
    </div>
  );
};

export default Index;
