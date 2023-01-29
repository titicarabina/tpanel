import React, { useState } from "react";

type Props = {};

export default function RefreshData({}: Props) {
  const [filestoAdd, setFilestoAdd] = useState(1);
  const [error, setError] = useState("");

  const handleAdauga = () => {
    console.log("Adauga");
  };

  const handleAnuleaza = () => {
    console.log("Anuleaza");
  };

  const addfile = () => {
    if (filestoAdd < 5) {
      setFilestoAdd(filestoAdd + 1);
    } else {
      setError("Maxim 5 fisiere");
    }
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Adauga o intrare noua</h3>
          <div className="md:flex md:space-x-2">
            <p className="py-1">
              <label className="label">
                <span className="label-text">Emitent</span>
              </label>
              <input
                type="text"
                placeholder="Emitent"
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
            <p className="py-1">
              <label className="label">
                <span className="label-text">Destinatar</span>
              </label>
              <input
                type="text"
                placeholder="Destinatar"
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
          </div>
          <div className="flex space-x-2">
            <p className="py-1">
              <label className="label">
                <span className="label-text">Data Reg</span>
              </label>
              <input
                type="date"
                placeholder="Data Reg."
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
            <p className="py-1">
              <label className="label">
                <span className="label-text">Data Doc</span>
              </label>
              <input
                type="date"
                placeholder="Data Doc."
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
            <p className="py-1">
              <label className="label">
                <span className="label-text">Data Exp</span>
              </label>
              <input
                type="date"
                placeholder="Data Exp."
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
          </div>
          <div className="md:flex md:space-x-2">
            <p className="py-1">
              <label className="label">
                <span className="label-text">Nr Conex</span>
              </label>
              <input
                type="text"
                placeholder="Nr Conex"
                className="input input-bordered  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
            <p className="py-1">
              <label className="label">
                <span className="label-text">Continut</span>
              </label>
              <input
                type="text"
                placeholder="Continut"
                className="input input-bordered focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </p>
          </div>{" "}
          <p className="py-1">
            <label className="label">
              <span className="label-text">
                Adauga fisiere{" "}
                <span className="cursor-pointer" onClick={addfile}>
                  ➕
                </span>
              </span>
            </label>
            {error && <p className="text-red-600">{error}</p>}
            {[...Array(filestoAdd)].map((e, i) => (
              <input
                key={i}
                type="file"
                placeholder="Continut"
                className="file-input w-full max-w-xs my-2"
              />
            ))}
          </p>
          <div className="flex justify-end space-x-2">
            <label
              className="btn btn-success"
              htmlFor="my-modal-3"
              onClick={handleAdauga}
            >
              Adauga
            </label>
            <label
              htmlFor="my-modal-3"
              className="btn btn-cancel"
              onClick={handleAnuleaza}
            >
              Anuleaza
            </label>
          </div>
        </div>
      </div>
      <div className="stats bg-gradient-to-r from-cyan-800 to-blue-800 text-primary-content shadow-lg">
        <div className="stat">
          <div className="stat-title">Ultimul adaugat</div>
          <div className="stat-value text-sm">acum 2 minute</div>
          <div className="text-[10px]">
            adaugat de{" "}
            <span className="text-red-600 font-semibold">Stetco Rene</span>
          </div>
          <div className="stat-actions">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-success">
              Adauga intrare noua{" "}
            </label>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Total intrari</div>
          <div className="stat-value">2</div>
        </div>
        <div className="stat">
          <div className="stat-title">Total Iesiri</div>
          <div className="stat-value">3</div>
        </div>
      </div>
    </>
  );
}
