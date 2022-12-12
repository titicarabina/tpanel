import React, { useState } from "react";
import { usePlayerSearch } from "../utils/usePlayersSearch";

// Abbreviation function for formatting money values
var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
function abbreviateNumber(number: number) {
  // Determine tier
  var tier = (Math.log10(Math.abs(number)) / 3) | 0;

  // If zero, no suffix needed
  if (tier === 0) return number;

  // Get suffix and determine scale
  var suffix = SI_SYMBOL[tier];
  var scale = Math.pow(10, tier * 3);

  // Scale number and add suffix
  var scaled = number / scale;
  return scaled.toFixed(1) + suffix;
}

// Sample data
var Data = [
  {
    name: "Titi",
    citizenid: "A43NSDF",
    license: "licens: dasdasdaldjalksjdalkdj",
    money: {
      bank: 4000,
      cash: 4000,
      crypto: 4000,
    },
  },
  {
    name: "Titi2",
    citizenid: "A43NSDF",
    license: "licens: dasdasdaldjalksjdalkdj",
    money: {
      bank: 4000,
      cash: 4000,
      crypto: 4000,
    },
  },
  {
    name: "Titi3",
    citizenid: "A43NSDF",
    license: "licens: dasdasdaldjalksjdalkdj",
    money: {
      bank: 4000,
      cash: 4000,
      crypto: 4000,
    },
  },
];

function PlayersTable() {
  // State for current page and page size
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState({
    name: "",
    citizenid: "",
    license: "",
    moneyType: "",
    moneyMode: "",
    money: 0,
    job: "",
    gang: "",
    metadata: "",
    inventory: "",
    pageSize: 10,
  });

  function handleNameSearch(e: any) {
    setQuery({ ...query, name: e.target.value });
  }

  function handleCitizenidSearch(e: any) {
    setQuery({ ...query, citizenid: e.target.value });
  }
  function handleLicenseSearch(e: any) {
    setQuery({ ...query, license: e.target.value });
  }
  function handleMoneySearch(e: any) {
    setQuery({ ...query, money: e.target.value });
  }
  function handleMoneyTypeSearch(e: any) {
    setQuery({ ...query, moneyType: e.target.value });
  }
  function handlemoneyModeSearch(e: any) {
    setQuery({ ...query, moneyMode: e.target.value });
  }
  function handleJobSearch(e: any) {
    setQuery({ ...query, job: e.target.value });
  }
  function handleGangsearch(e: any) {
    setQuery({ ...query, gang: e.target.value });
  }
  function handleMetadataSearch(e: any) {
    setQuery({ ...query, metadata: e.target.value });
  }
  function handleInventorySearch(e: any) {
    setQuery({ ...query, inventory: e.target.value });
  }

  // Use search hook
  usePlayerSearch(query, pageNumber);

  return (
    <div>
      {/* Table */}
      <table className="table w-full">
        {/* Search inputs */}
        <thead>
          <tr>
            <th className="">
              <input
                type="text"
                className="form-control"
                placeholder="Search by name..."
                value={query.name}
                onChange={handleNameSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="form-control"
                placeholder="Search by license..."
                value={query.license}
                onChange={handleLicenseSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className=""
                placeholder="Search by citizenid..."
                value={query.license}
                onChange={handleLicenseSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="form-control"
                placeholder="Search by money..."
                value={query.citizenid}
                onChange={handleMoneySearch}
              />
            </th>
          </tr>
        </thead>
        {/* Table head */}
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="">License</th>
            <th className="">citizenId</th>
            <th className="">Money</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {Data.map((row: any, index: any) => (
            <tr key={index}>
              <td className="">{row.name}</td>
              <td className="">{row.license}</td>
              <td className="">{row.citizenid}</td>
              <td className="">{abbreviateNumber(row.money.bank)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayersTable;
