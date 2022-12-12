import React from "react";

type Props = {};

export default function RefreshData({}: Props) {
  return (
    <div className="stats bg-primary text-primary-content shadow-lg">
      <div className="stat">
        <div className="stat-title">Last updated</div>
        <div className="flex gap-5">
          <div>
            <span className="countdown font-mono text-xl">
              {" "}
              <span></span>
            </span>
            days
          </div>
          <div>
            <span className="countdown font-mono text-xl">
              {" "}
              <span></span>
            </span>
            hours
          </div>
          <div>
            <span className="countdown font-mono text-xl">
              <span></span>
            </span>
            min
          </div>
          <div>
            <span className="countdown font-mono text-xl">
              {" "}
              <span></span>
            </span>
            sec
          </div>
        </div>
        <div className="stat-actions">
          <button className="btn btn-sm btn-success">Refresh Data</button>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Total balance</div>
        <div className="stat-value">$89.400.000,00</div>
      </div>
    </div>
  );
}
