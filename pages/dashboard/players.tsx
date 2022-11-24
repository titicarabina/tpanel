import React from "react";
import PlayersTable from "../../components/PlayersTable";
import PlayerStats from "../../components/PlayerStats";
import RefreshData from "../../components/RefreshData";
import SideBar from "../../components/SideBar";

type Props = {};

export default function players({}: Props) {
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
          <div className="mt-20">
            <PlayerStats />
          </div>
        </div>
        <PlayersTable />
      </div>
    </div>
  );
}
