import React from "react";

type Props = {};

function StatsComponent({}: Props) {
  return (
    <div className="ml-5 stats shadow-lg mt-5 bg-base-300 -z-1">
      <div className="stat place-items-center">
        <div className="stat-title">Total intrari</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Din Ianuarie 1 pana in Februarie 1</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Total iesiri</div>
        <div className="stat-value text-secondary">4,200</div>
        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Clienti noi</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
}

export default StatsComponent;
