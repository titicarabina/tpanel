import { BigHead } from "@bigheads/core";
import React, { useState } from "react";
import { getRandomOptions } from "../utils/bigheads";
import { FcPhone } from "react-icons/fc";

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
    name: "Corcodusa",
    citizenid: "USJ96196",
    money: {
      cash: Number(430),
      bank: Number(5000),
      crypto: Number(0),
    },
    charinfo: {
      phone: "1279025569",
      firstname: "Marius",
      lastname: "Marius",
      nationality: "ITALIANA",
      gender: Number(0),
      birthdate: "1994-07-12",
      cid: "1",
      backstory: "placeholder backstory",
      account: "US03QBCore6435756853",
    },
    license: "license:5cf8659982e3c4201afffbf7281b02fb237d257c",
    inventory:
      '[{"name":"id_card","info":{"gender":0,"firstname":"Marius","birthdate":"1994-07-12","citizenid":"USJ96196","nationality":"ITALIANA","lastname":"Marius"},"slot":39,"type":"item","amount":1},{"name":"phone","info":[],"slot":40,"type":"item","amount":1}]',
    metadata: {
      inside: {
        apartment: [],
      },
      injail: Number(0),
      fitbit: [],
      callsign: "NO CALLSIGN",
      hunger: 91.59999999999856,
      tracker: false,
      jobrep: {
        taxi: Number(0),
        trucker: Number(0),
        tow: Number(0),
        hotdog: Number(0),
      },
      currentapartment: "apartment55677",
      status: [],
      phone: [],
      walletid: "QB-37033673",
      jailitems: [],
      fingerprint: "Ac242I92ytR6319",
      attachmentcraftingrep: Number(0),
      armor: Number(0),
      phonedata: {
        SerialNumber: Number(33763169),
        InstalledApps: [],
      },
      craftingrep: Number(0),
      bloodtype: "A-",
      inlaststand: false,
      licences: {
        driver: false,
        weapon: false,
        business: false,
      },
      ishandcuffed: false,
      isdead: false,
      thirst: 92.39999999999964,
      criminalrecord: {
        hasRecord: false,
      },
      stress: Number(0),
      dealerrep: Number(0),
      commandbinds: [],
    },
    job: {
      name: "unemployed",
      payment: Number(10),
      isboss: false,
      grade: {
        name: "Freelancer",
        level: Number(0),
      },
      onduty: true,
      label: "Civilian",
    },
    position: {
      x: 371.8813171386719,
      y: -1030.879150390625,
      z: 29.3135986328125,
    },
    gang: {
      name: "none",
      grade: {
        name: "none",
        level: Number(0),
      },
      isboss: false,
      label: "No Gang Affiliaton",
    },
    phone: null,
  },
  {
    name: "YQnnIS",
    citizenid: "UQY12510",
    money: {
      crypto: Number(0),
      cash: Number(450),
      bank: Number(5000),
    },
    charinfo: {
      gender: Number(0),
      lastname: "Ciprian",
      cid: "1",
      firstname: "Lacatus",
      birthdate: "2000-06-09",
      backstory: "placeholder backstory",
      phone: "1957163820",
      nationality: "Borfas",
      account: "US08QBCore4710734157",
    },
    license: "license:84fc8c575a9186b74ccf55e912e19f9ba671df8f",
    inventory:
      '[{"type":"item","name":"id_card","info":{"gender":0,"lastname":"Ciprian","citizenid":"UQY12510","nationality":"Borfas","firstname":"Lacatus","birthdate":"2000-06-09"},"amount":1,"slot":1},{"type":"item","name":"phone","info":[],"amount":1,"slot":2}]',
    metadata: {
      phonedata: {
        SerialNumber: Number(15347205),
        InstalledApps: [],
      },
      isdead: false,
      ishandcuffed: false,
      inside: {
        apartment: [],
      },
      jailitems: [],
      injail: Number(0),
      currentapartment: "apartment55556",
      stress: Number(0),
      licences: {
        driver: false,
        business: false,
        weapon: false,
      },
      criminalrecord: {
        hasRecord: false,
      },
      hunger: 95.79999999999927,
      fitbit: [],
      armor: Number(0),
      thirst: 96.19999999999982,
      status: [],
      callsign: "NO CALLSIGN",
      jobrep: {
        hotdog: Number(0),
        trucker: Number(0),
        taxi: Number(0),
        tow: Number(0),
      },
      attachmentcraftingrep: Number(0),
      tracker: false,
      inlaststand: false,
      fingerprint: "CH848E02xnk5860",
      craftingrep: Number(0),
      phone: [],
      walletid: "QB-75420974",
      bloodtype: "A+",
      dealerrep: Number(0),
      commandbinds: [],
    },
    job: {
      grade: {
        name: "Freelancer",
        level: Number(0),
      },
      name: "unemployed",
      label: "Civilian",
      isboss: false,
      payment: Number(10),
      onduty: true,
    },
    position: {
      x: -28.28571510314941,
      y: -1137.9296875,
      z: 26.81982421875,
    },
    gang: {
      label: "No Gang Affiliaton",
      grade: {
        name: "none",
        level: Number(0),
      },
      name: "none",
      isboss: false,
    },
    phone: null,
  },
  {
    name: "gbb14",
    citizenid: "UUP98526",
    money: {
      bank: Number(40598),
      cash: Number(15),
      crypto: Number(0),
    },
    charinfo: {
      lastname: "Razvan",
      gender: Number(0),
      nationality: "Roman",
      cid: "1",
      phone: "1760826438",
      account: "US04QBCore8709167218",
      firstname: "Angel",
      birthdate: "1990-01-05",
      backstory: "placeholder backstory",
    },
    license: "license:1b5735da8f0119c2c9b4e79c8195aad58472fd27",
    inventory:
      '[{"name":"burger-fries","info":"","amount":4,"type":"item","slot":1},{"name":"water_bottle","info":[],"amount":6,"type":"item","slot":2},{"name":"driver_license","info":{"type":"Class C Driver License","birthdate":"1990-01-05","firstname":"Angel","lastname":"Razvan"},"amount":1,"type":"item","slot":12},{"name":"id_card","info":{"lastname":"Razvan","gender":0,"nationality":"Roman","citizenid":"UUP98526","birthdate":"1990-01-05","firstname":"Angel"},"amount":1,"type":"item","slot":13},{"name":"phone","info":[],"amount":1,"type":"item","slot":6}]',
    metadata: {
      armor: Number(0),
      stress: Number(0),
      callsign: "NO CALLSIGN",
      fingerprint: "JG381z83gQz8852",
      jobrep: {
        trucker: Number(84),
        tow: Number(47),
        taxi: Number(0),
        hotdog: Number(0),
      },
      dealerrep: Number(0),
      thirst: 79.5999999999949,
      bloodtype: "O+",
      status: [],
      inlaststand: false,
      inside: {
        apartment: [],
      },
      currentapartment: "apartment17527",
      tracker: false,
      craftingrep: Number(0),
      attachmentcraftingrep: Number(0),
      ishandcuffed: false,
      jailitems: [],
      phonedata: {
        InstalledApps: [],
        SerialNumber: Number(68209298),
      },
      phone: [],
      commandbinds: [],
      criminalrecord: {
        hasRecord: false,
      },
      hunger: 72.39999999997963,
      injail: Number(0),
      licences: {
        driver: true,
        weapon: false,
        business: false,
      },
      isdead: false,
      fitbit: [],
      walletid: "QB-54429532",
    },
    job: {
      name: "mining",
      isboss: false,
      payment: Number(500),
      onduty: true,
      label: "Miner",
      grade: {
        name: "Miner",
        level: Number(0),
      },
    },
    position: {
      x: -706.5494384765625,
      y: -1136.808837890625,
      z: 10.6102294921875,
    },
    gang: {
      grade: {
        level: Number(0),
        name: "none",
      },
      name: "none",
      label: "No Gang Affiliaton",
      isboss: false,
    },
    phone: null,
  },
  {
    name: "Dark Nebunu",
    citizenid: "UVB04497",
    money: {
      bank: Number(5010),
      cash: Number(500),
      crypto: Number(0),
    },
    charinfo: {
      cid: "1",
      firstname: "Tavan",
      account: "US07QBCore7099764327",
      birthdate: "2000-09-06",
      nationality: "Romana",
      lastname: "Perete",
      backstory: "placeholder backstory",
      gender: Number(0),
      phone: "1638875963",
    },
    license: "license:4fdfeb70e075ef25bd1dfe15b7c94535616464f3",
    inventory:
      '[{"name":"id_card","info":{"birthdate":"2000-09-06","nationality":"Romana","lastname":"Perete","citizenid":"UVB04497","firstname":"Tavan","gender":0},"type":"item","slot":2,"amount":1},{"name":"pachet","info":"","type":"item","slot":3,"amount":19},{"name":"oxy","info":"","type":"item","slot":4,"amount":5},{"name":"phone","info":[],"type":"item","slot":10,"amount":1}]',
    metadata: {
      phonedata: {
        InstalledApps: [],
        SerialNumber: Number(62877775),
      },
      injail: Number(0),
      stress: Number(0),
      dealerrep: Number(0),
      status: [],
      thirst: 73.39999999999873,
      inlaststand: false,
      hunger: 70.5999999999949,
      currentapartment: "apartment44277",
      armor: Number(0),
      jobrep: {
        trucker: Number(0),
        hotdog: Number(0),
        taxi: Number(0),
        tow: Number(0),
      },
      inside: {
        apartment: [],
      },
      commandbinds: [],
      callsign: "NO CALLSIGN",
      licences: {
        weapon: false,
        business: false,
        driver: false,
      },
      criminalrecord: {
        hasRecord: false,
      },
      walletid: "QB-77883051",
      fingerprint: "SQ004n58JhG2937",
      attachmentcraftingrep: Number(0),
      craftingrep: Number(0),
      phone: [],
      ishandcuffed: false,
      tracker: false,
      fitbit: [],
      isdead: false,
      jailitems: [],
      bloodtype: "A+",
    },
    job: {
      name: "unemployed",
      payment: Number(10),
      grade: {
        name: "Freelancer",
        level: Number(0),
      },
      onduty: true,
      isboss: false,
      label: "Civilian",
    },
    position: {
      x: 255.75823974609375,
      y: -896.927490234375,
      z: 28.892333984375,
    },
    gang: {
      name: "none",
      isboss: false,
      grade: {
        name: "none",
        level: Number(0),
      },
      label: "No Gang Affiliaton",
    },
    phone: null,
  },
  {
    name: "grog doucette",
    citizenid: "UYX94949",
    money: {
      bank: Number(5000),
      cash: Number(500),
      crypto: Number(0),
    },
    charinfo: {
      nationality: "Roman",
      birthdate: "2020-05-05",
      gender: Number(0),
      phone: "1611477221",
      account: "US09QBCore1542916963",
      cid: "1",
      lastname: "camataru",
      backstory: "placeholder backstory",
      firstname: "grogy",
    },
    license: "license:3854ccbf5030d1993f2c86e4c280bdc21602c893",
    inventory:
      '[{"name":"phone","amount":1,"type":"item","info":[],"slot":1},{"name":"id_card","amount":1,"type":"item","info":{"nationality":"Roman","citizenid":"UYX94949","lastname":"camataru","gender":0,"firstname":"grogy","birthdate":"2020-05-05"},"slot":2}]',
    metadata: {
      licences: {
        business: false,
        driver: false,
        weapon: false,
      },
      armor: Number(0),
      injail: Number(0),
      status: [],
      jobrep: {
        trucker: Number(0),
        hotdog: Number(0),
        tow: Number(0),
        taxi: Number(0),
      },
      phone: [],
      currentapartment: "apartment52822",
      dealerrep: Number(0),
      thirst: Number(100),
      inlaststand: false,
      phonedata: {
        SerialNumber: Number(52873860),
        InstalledApps: [],
      },
      attachmentcraftingrep: Number(0),
      fitbit: [],
      craftingrep: Number(0),
      inside: {
        apartment: [],
      },
      criminalrecord: {
        hasRecord: false,
      },
      walletid: "QB-26631220",
      isdead: false,
      jailitems: [],
      fingerprint: "ol492Z79ROC3991",
      hunger: Number(100),
      bloodtype: "O-",
      callsign: "NO CALLSIGN",
      commandbinds: [],
      ishandcuffed: false,
      stress: Number(0),
      tracker: false,
    },
    job: {
      name: "unemployed",
      payment: Number(10),
      label: "Civilian",
      grade: {
        name: "Freelancer",
        level: Number(0),
      },
      isboss: false,
      onduty: true,
    },
    position: {
      x: 409.5956115722656,
      y: -1014.1978149414062,
      z: 29.3472900390625,
    },
    gang: {
      name: "none",
      isboss: false,
      label: "No Gang Affiliaton",
      grade: {
        name: "none",
        level: Number(0),
      },
    },
    phone: null,
  },
];

function PlayersTable() {
  // State for current page and page size
  const [pageNumber, setPageNumber] = useState(1);
  const [query, setQuery] = useState({
    name: "",
    citizenid: "",
    license: "",
    moneyType: "bank",
    moneyMode: "",
    money: "",
    job: "",
    gang: "",
    metadata: "",
    charinfo: "",
    phone: "",
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
  function handlePhoneSearch(e: any) {
    setQuery({ ...query, phone: e.target.value });
  }
  function handleCharinfoSearch(e: any) {
    setQuery({ ...query, charinfo: e.target.value });
  }
  return (
    <div className="">
      {/* Table */}
      <table className="table m-5 shadow-md rounded-md">
        {/* Search inputs */}
        <thead>
          <tr>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 p-2 w-30"
                placeholder="Search by name..."
                value={query.name}
                onChange={handleNameSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by citizenid..."
                value={query.license}
                onChange={handleCitizenidSearch}
              />
            </th>
            <th className="grid">
              {" "}
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-30 p-2"
                placeholder="Search by money..."
                value={query.money}
                onChange={handleMoneySearch}
              />
              <div className="w-30">
                <select
                  className="h-10 rounded-md text-white bg-base-100 p-2"
                  placeholder="Search by money..."
                  value={query.moneyType}
                  onChange={handleMoneyTypeSearch}
                >
                  <option value="cash">Cash</option>
                  <option value="bank">Bank</option>
                  <option value="crypto">Crypto</option>
                </select>
                <select
                  className="h-10 rounded-md text-white bg-base-100 p-2"
                  placeholder="Search by money..."
                  value={query.moneyMode}
                  onChange={handlemoneyModeSearch}
                >
                  <option value="greater">Greater then</option>
                  <option value="less">Less then</option>
                  <option value="equal">Equal to</option>
                </select>
              </div>
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by charinfo..."
                value={query.charinfo}
                onChange={handleCharinfoSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by metadata..."
                value={query.metadata}
                onChange={handleMetadataSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by job..."
                value={query.job}
                onChange={handleJobSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by gang..."
                value={query.gang}
                onChange={handleGangsearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by phone..."
                value={query.phone}
                onChange={handlePhoneSearch}
              />
            </th>
            <th className="">
              <input
                type="text"
                className="h-10 rounded-md text-white bg-base-100 w-28 p-2"
                placeholder="Search by inventory..."
                value={query.inventory}
                onChange={handleInventorySearch}
              />
            </th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {Data.map((row: any, index: any) => (
            <tr key={index}>
              <td className="">
                <div className="flex">
                  <div className="h-10 mr-2 relative">
                    {" "}
                    <div className="absolute bg-green-500 rounded-full w-3 h-3 shadow-sm animate-pulse mt-1 right-3"></div>
                    <BigHead {...getRandomOptions()} className="h-10 mr-2" />
                  </div>

                  <span className="pt-2">{row.name}</span>
                </div>
              </td>
              <td className="">{row.citizenid}</td>
              <td className="grid gap-2">
                <span className="text-xs">
                  <div className="badge badge-primary">Bank:</div>{" "}
                  <span className="font-bold">{row.money.bank} $</span>
                </span>
                <span className="text-xs">
                  <div className="badge badge-secondary">Cash:</div>
                  <span className="font-bold">{row.money.cash} $</span>
                </span>
                <span className="text-xs">
                  <div className="badge badge-accent">Crypto:</div>{" "}
                  <span className="font-bold">{row.money.crypto} $</span>
                </span>
              </td>
              <td className="">
                <button className="btn gap-2">Details</button>
              </td>
              <td className="">
                <button className="btn gap-2">Details</button>
              </td>
              <td className="">
                <button className="btn gap-2">Details</button>
              </td>
              <td className="">
                <button className="btn gap-2">Details</button>
              </td>
              <td className="">
                <div className="flex">
                  <div className="mt-1 mx-2">
                    <FcPhone />
                  </div>
                  {row.charinfo.phone}
                </div>
              </td>
              <td className="">
                <button className="btn gap-2">Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayersTable;
