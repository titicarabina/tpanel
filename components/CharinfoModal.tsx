import React from "react";

type Props = {
  data: any;
};

export default function CharinfoModal({ data }: Props) {
  return (
    <div>
      <label htmlFor="my-modal-4" className="btn">
        details
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label
          className="modal-box relative shrink-0 overflow-visible"
          htmlFor=""
        >
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
            {data}
          </h3>
          <p className="py-4 snap-y"></p>
        </label>
      </label>
    </div>
  );
}
