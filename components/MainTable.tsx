import React, { useState } from "react";
import { FcPhone } from "react-icons/fc";
import cashier from "../public/cashier.svg";
import Image from "next/image";
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
    nr: "JVG65883",
    data_reg: "01.01.2021",
    data_doc: "01.01.2021",
    emitent: "Emitent 1",
    continut: "Continut 1",
    semnat: true,
    data_exp: "01.01.2021",
    destinatar: "Destinatar 1",
    nr_conex: "1",
  },
  {
    nr: "JVG65884",
    data_reg: "01.01.2021",
    data_doc: "01.01.2021",
    emitent: "Emitent 2",
    continut: "Continut 2",
    semnat: false,
    data_exp: "01.01.2021",
    destinatar: "Destinatar 2",
    nr_conex: "2",
  },
  {
    nr: "JVG65884",
    data_reg: "01.01.2021",
    data_doc: "01.01.2021",
    emitent: "Emitent 2",
    continut: "Continut 2",
    semnat: false,
    data_exp: "01.01.2021",
    destinatar: "Destinatar 2",
    nr_conex: "2",
  },
  {
    nr: "JVG65884",
    data_reg: "01.01.2021",
    data_doc: "01.01.2021",
    emitent: "Emitent 3",
    continut: "Continut 3",
    semnat: true,
    data_exp: "01.01.2021",
    destinatar: "Destinatar 3",
    nr_conex: "3",
  },
  {
    nr: "JVG65886",
    data_reg: "01.01.2021",
    data_doc: "01.01.2021",
    emitent: "Emitent 4",
    continut: "Continut 4",
    semnat: false,
    data_exp: "01.01.2021",
    destinatar: "Destinatar 2",
    nr_conex: "4",
  },
];

function PlayersTable() {
  // State for current page and page size
  return (
    <div className="">
      {/* Table */}
      <table className="table m-5 shadow-md rounded-md">
        {/* Search inputs */}
        <thead>
          <tr>
            <th>Pdf</th>
            <th className="">Nr.</th>
            <th className="">Data reg.</th>
            <th className="">Data doc.</th>
            <th className="">Emitent</th>
            <th className="">Continut</th>
            <th className="">Primit</th>
            <th className="">Data exp.</th>
            <th className="">Destinatar</th>
            <th className="">Nr. conex</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {Data.map((row: any, index: any) => (
            <tr key={index}>
              <td>
                {" "}
                <div className="h-10 mr-2 relative">
                  {" "}
                  <Image
                    src={cashier}
                    width={30}
                    height={30}
                    className="rounded-md pt-3 cursor-pointer"
                    alt="cashier"
                  />
                </div>
              </td>
              <td className="">
                <span className="pt-2">{row.nr}</span>
              </td>
              <td className="">
                <div className="btn gap-2">{row.data_reg}</div>
              </td>
              <td className="">
                <div className="btn gap-2">{row.data_doc}</div>
              </td>
              <td className="">
                <button className="btn gap-2">{row.emitent}</button>
              </td>
              <td className="">
                <button className="btn gap-2">Detalii</button>
              </td>
              <td className="">
                <button className="btn gap-2">
                  {row.semnat ? "✅" : "❌"}
                </button>
              </td>
              <td className="">
                <button className="btn gap-2">{row.data_exp}</button>
              </td>
              <td className="">
                <div className="btn gap-2">{row.destinatar}</div>
              </td>
              <td className="">
                <button className="btn gap-2">{row.nr_conex}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayersTable;
