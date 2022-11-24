import { BigHead } from "@bigheads/core";
import React, { useState } from "react";
import usePlayersSearch from "../utils/usePlayersSearch";
import CharinfoModal from "./CharinfoModal";
type Props = {};

var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

function abbreviateNumber(number: number) {
  // what tier? (determines SI symbol)
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return number;

  // get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // scale the number
  var scaled = number / scale;

  // format number and add suffix
  return scaled.toFixed(1) + suffix;
}

export default function PlayersTable({}: Props) {
  const [search, setSearch] = useState({
    name: "",
    citizenid: "",
    charinfo: "",
    moneytype: "cash",
    moneymode: "more",
    money: 0,
    job: "",
    metadata: "",
    gang: "",
    inventory: "",
    pagenumber: 1,
  });
  const { loading, error, players, hasMore } = usePlayersSearch(search);
  return (
    <>
      <div className="m-10 w-full shadow-lg rounded-2xl overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-left">Name</th>
              <th className="text-left">CitizenId</th>
              <th className="text-left">CharInfo</th>
              <th className="text-left">Money</th>
              <th className="text-left">Job</th>
              <th className="text-left">Metadata</th>
              <th className="text-left">Gang</th>
              <th className="text-left">Inventory</th>
            </tr>
            <tr>
              <th>
                <input
                  type="text"
                  className="input input-bordered m-2 h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by name..."
                  onChange={(e) => {
                    setSearch({ ...search, name: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by citizenid..."
                  onChange={(e) => {
                    setSearch({ ...search, citizenid: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by charinfo..."
                  onChange={(e) => {
                    setSearch({ ...search, charinfo: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by money..."
                  onChange={(e) => {
                    setSearch({ ...search, money: parseInt(e.target.value) });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by job..."
                  onChange={(e) => {
                    setSearch({ ...search, job: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by metadata..."
                  onChange={(e) => {
                    setSearch({ ...search, metadata: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by gang..."
                  onChange={(e) => {
                    setSearch({ ...search, gang: e.target.value });
                  }}
                />
              </th>
              <th>
                <input
                  type="text"
                  className="input input-bordered h-8 w-36 placeholder:font-light placeholder:text-xs"
                  placeholder="Search by inventory..."
                  onChange={(e) => {
                    setSearch({ ...search, inventory: e.target.value });
                  }}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player: any) => (
              <tr key={player.index}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <div className="relative">
                          <div className="absolute right-1 top-1 w-2 h-2 bg-green-500 rounded-full shadow-green-400 shadow-lg animate-pulse"></div>
                          <BigHead
                            accessory="none"
                            body="breasts"
                            circleColor="blue"
                            clothing="dress"
                            clothingColor="white"
                            eyebrows="concerned"
                            eyes="simple"
                            faceMask={true}
                            faceMaskColor="black"
                            facialHair="none2"
                            graphic="graphQL"
                            hair="bob"
                            hairColor="black"
                            hat="beanie"
                            hatColor="blue"
                            lashes={false}
                            lipColor="red"
                            mask
                            mouth="serious"
                            skinTone="yellow"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{player.name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {player.citizenid}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <th className="">
                  <CharinfoModal data="data" />
                </th>
                <th>{player.money && JSON.parse(player.money).bank}</th>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
