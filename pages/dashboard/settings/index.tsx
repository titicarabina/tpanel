import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar";
import type { NextPage } from "next";
import { GrCopy, GrFormCheckmark } from "react-icons/gr";
import { CopyToClipboard } from "react-copy-to-clipboard";
import clientPromise from "../../../lib/mongodb";
import { useSession } from "next-auth/react";
import { getSession } from "next-auth/client";

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const client = await clientPromise;
  const db = client.db();
  const user = await db
    .collection("users")
    .findOne({ email: session.user.email });
  return {
    props: {
      user: JSON.parse(JSON.stringify(user)),
    },
  };
};

const Index: NextPage = () => {
  const { data: session } = useSession();
  const [token, setToken] = React.useState("");
  const [serverName, setServerName] = React.useState("Vamos Romania Roleplay");
  const [licenseRenewal, setLicenseRenewal] = React.useState("2022-01-01");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  useEffect(() => {
    if (session) {
      console.log(session);
    }
  }, [session]);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center justify-center p-5 w-screen">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 589.05 598.05"
              className="enable-background:new 0 0 489.05 489.05; animate-pulse sm:w-60 h-60 ml-4 "
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g id="XMLID_610_">
                    <path
                      id="XMLID_611_"
                      className="fill:#94A4A4;"
                      d="M391.175,277.95l-19.6-8.1c3.4-16.9,3.3-34,0-50.4l19.7-8.1c7-2.9,10.4-11,7.5-18
				l-8.9-21.4c-2.9-7-11-10.4-18-7.5l-19.7,8.1c-9.3-13.9-21.3-26.1-35.6-35.7l8.1-19.6c2.9-7-0.4-15.1-7.4-18l-21.4-8.9
				c-7-2.9-15.1,0.4-18,7.4l-8.1,19.6c-16.9-3.4-34-3.3-50.4,0l-8.1-19.7c-2.9-7-11-10.4-18-7.5l-21.4,8.9c-7,2.9-10.4,11-7.5,18
				l8.1,19.7c-13.9,9.3-26.1,21.3-35.7,35.6l-19.6-8.1c-7-2.9-15.1,0.4-18,7.4l-8.9,21.4c-2.9,7,0.4,15.1,7.4,18l19.6,8.1
				c-3.4,16.9-3.3,34,0,50.4l-19.7,8.1c-7,2.9-10.4,11-7.5,18l8.9,21.4c2.9,7,11,10.4,18,7.5l19.7-8.1c9.3,13.9,21.3,26.1,35.6,35.7
				l-8.1,19.6c-2.9,7,0.4,15.1,7.4,18l21.4,8.9c7,2.9,15.1-0.4,18-7.4l8.1-19.6c16.9,3.4,34,3.3,50.4,0l8.1,19.7
				c2.9,7,11,10.4,18,7.5l21.4-8.9c7-2.9,10.4-11,7.5-18l-8.1-19.7c13.9-9.3,26.1-21.3,35.7-35.6l19.6,8.1c7,2.9,15.1-0.4,18-7.4
				l8.9-21.4C401.575,288.85,398.175,280.85,391.175,277.95z M220.875,301.55c-31.5-13-46.4-49.1-33.4-80.6s49.1-46.4,80.6-33.4
				s46.4,49.1,33.4,80.6S252.375,314.55,220.875,301.55z"
                    />
                  </g>
                  <path
                    className="fill:#2C2F33;"
                    d="M84.275,84.35c88.3-88.3,232-88.3,320.4,0l1.4,1.4h-27.4c-5,0-9.1,4.1-9.1,9.1s4.1,9.1,9.1,9.1
			h49.3c5,0,9.1-4.1,9.1-9.1v-49.3c0-5-4.1-9.1-9.1-9.1s-9.1,4.1-9.1,9.1v27.4l-1.4-1.4c-95.4-95.4-250.6-95.4-346,0
			c-3.5,3.5-3.5,9.3,0,12.8C74.975,87.95,80.775,87.95,84.275,84.35z"
                  />
                  <path
                    className="fill:#2C2F33;"
                    d="M61.075,452.65c5,0,9.1-4.1,9.1-9.1v-27.4l1.3,1.4c47.7,47.7,110.3,71.5,173,71.5
			c62.6,0,125.3-23.9,173-71.5c3.5-3.5,3.5-9.3,0-12.8s-9.3-3.5-12.8,0c-88.3,88.3-232,88.3-320.4,0l-1.4-1.4h27.4
			c5,0,9.1-4.1,9.1-9.1s-4.1-9.1-9.1-9.1h-49.2c-5,0-9.1,4.1-9.1,9.1v49.3C51.975,448.55,56.075,452.65,61.075,452.65z"
                  />
                  <path
                    className="fill:#2C2F33;"
                    d="M406.975,207.25c2.3-5.6,2.3-11.8,0-17.5l-8.9-21.4c-3.5-8.6-11.8-14.1-21.1-14.1
			c-3,0-5.9,0.6-8.7,1.7l-13,5.4c-7.9-10.6-17.2-19.8-27.7-27.7l5.4-13c4.8-11.6-0.7-25-12.3-29.8l-21.4-8.9
			c-2.8-1.2-5.7-1.7-8.7-1.7c-9.3,0-17.5,5.5-21.1,14.1l-5.4,13c-13-1.9-26.2-1.9-39.2,0l-5.4-13c-3.5-8.6-11.8-14.1-21.1-14.1
			c-3,0-5.9,0.6-8.7,1.7l-21.4,8.9c-5.6,2.3-10,6.7-12.4,12.4c-2.3,5.6-2.3,11.8,0,17.5l5.4,13c-10.6,7.9-19.8,17.2-27.7,27.7
			l-13-5.4c-2.8-1.2-5.7-1.7-8.7-1.7c-9.3,0-17.5,5.5-21.1,14.1l-8.9,21.4c-4.8,11.6,0.7,25,12.4,29.8l13,5.4
			c-1.9,13-1.9,26.2,0,39.2l-13,5.4c-11.6,4.8-17.2,18.2-12.4,29.8l8.9,21.4c3.5,8.6,11.8,14.1,21.1,14.1c3,0,5.9-0.6,8.7-1.7
			l13-5.4c7.9,10.6,17.2,19.8,27.7,27.7l-5.4,13c-4.8,11.6,0.7,25,12.3,29.8l21.4,8.9c2.8,1.2,5.7,1.7,8.7,1.7
			c9.3,0,17.5-5.5,21.1-14.1l5.4-13c13,1.9,26.2,1.9,39.2,0l5.4,13c3.5,8.6,11.8,14.1,21.1,14.1c3,0,5.9-0.6,8.7-1.7l21.4-8.9
			c11.6-4.8,17.2-18.2,12.4-29.8l-5.4-13c10.6-7.9,19.8-17.2,27.7-27.7l13,5.4c2.8,1.2,5.7,1.7,8.7,1.7l0,0
			c9.3,0,17.5-5.5,21.1-14.1l8.9-21.4c2.3-5.6,2.3-11.8,0-17.5c-2.3-5.6-6.7-10-12.4-12.4l-13-5.4c1.9-13,1.9-26.2,0-39.2l13-5.4
			C400.275,217.25,404.675,212.85,406.975,207.25z M390.275,200.35c-0.5,1.2-1.4,2.1-2.5,2.5l-19.7,8.1c-4,1.7-6.3,5.9-5.4,10.1
			c3.1,15.6,3.1,31.3,0,46.9c-0.8,4.2,1.4,8.5,5.4,10.1l19.6,8.1c1.2,0.5,2.1,1.4,2.5,2.5c0.5,1.2,0.5,2.4,0,3.6l-8.9,21.4
			c-1,2.3-3.8,3.5-6.1,2.5l-19.6-8.1c-4-1.7-8.6-0.3-11,3.3c-8.8,13.2-19.9,24.3-33.1,33.1c-3.6,2.4-5,7-3.3,11l8.1,19.7
			c1,2.4-0.2,5.2-2.5,6.1l-21.4,8.9c-2.4,1-5.2-0.2-6.1-2.5l-8.1-19.7c-1.4-3.4-4.8-5.6-8.4-5.6c-0.6,0-1.2,0.1-1.8,0.2
			c-15.4,3.1-31.5,3.1-46.9,0c-4.2-0.8-8.5,1.4-10.1,5.4l-8.1,19.6c-1,2.3-3.8,3.5-6.1,2.5l-21.4-8.9c-2.4-1-3.5-3.7-2.5-6.1
			l8.1-19.6c1.7-4,0.3-8.6-3.3-11c-13.2-8.8-24.3-19.9-33.1-33.2c-2.4-3.6-7-5-11-3.3l-19.7,8.1c-2.4,1-5.2-0.2-6.1-2.5l-8.9-21.4
			c-1-2.4,0.2-5.2,2.5-6.1l19.7-8.1c4-1.7,6.3-5.9,5.4-10.1c-3.1-15.6-3.1-31.3,0-46.9c0.8-4.2-1.4-8.5-5.4-10.1l-19.6-8.1
			c-2.4-1-3.5-3.7-2.5-6.1l8.9-21.4c1-2.3,3.8-3.5,6.1-2.5l19.6,8.1c4,1.7,8.6,0.3,11-3.3c8.8-13.2,19.9-24.3,33.1-33.1
			c3.6-2.4,5-7,3.3-11l-8.1-19.7c-0.5-1.2-0.5-2.4,0-3.6s1.4-2.1,2.5-2.5l21.4-8.9c2.4-1,5.2,0.2,6.1,2.5l8.1,19.7
			c1.7,4,5.9,6.3,10.1,5.4c15.4-3.1,31.5-3.1,46.9,0c4.2,0.8,8.5-1.4,10.1-5.4l8.1-19.6c1-2.3,3.8-3.5,6.1-2.5l21.4,8.9
			c2.4,1,3.5,3.7,2.5,6.1l-8.1,19.6c-1.7,4-0.3,8.6,3.3,11c13.2,8.8,24.3,19.9,33.1,33.2c2.4,3.6,7,5,11,3.3l19.7-8.1
			c2.4-1,5.2,0.2,6.1,2.5l8.9,21.4C390.775,197.85,390.775,199.15,390.275,200.35z"
                  />
                  <path
                    className="fill:#2C2F33;"
                    d="M271.575,179.25c-8.7-3.6-17.8-5.4-27.1-5.4c-28.7,0-54.4,17.1-65.4,43.7
			c-7.2,17.5-7.2,36.7,0,54.1c7.2,17.5,20.8,31.1,38.3,38.3c8.7,3.6,17.8,5.4,27.1,5.4c28.7,0,54.4-17.1,65.4-43.7
			c7.2-17.5,7.2-36.7,0-54.1C302.575,200.05,288.975,186.45,271.575,179.25z M293.075,264.65c-8.2,19.7-27.3,32.5-48.6,32.5
			c-6.9,0-13.7-1.4-20.1-4c-13-5.4-23.1-15.5-28.5-28.5s-5.4-27.3,0-40.3c8.2-19.7,27.3-32.5,48.6-32.5c6.9,0,13.7,1.4,20.1,4
			c13,5.4,23.1,15.5,28.5,28.5C298.475,237.45,298.475,251.75,293.075,264.65z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Settings</h2>
            <p className="text-gray-500 p-2">
              Server Name:{" "}
              <span className="text-gray-300">
                <input
                  type="text"
                  className="input input-bordered"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </span>
            </p>
            <p className="text-gray-500 p-2">
              License Renewal:{" "}
              <span className="text-gray-300">
                <input
                  type="date"
                  className="input input-bordered"
                  disabled
                  value={licenseRenewal}
                />
              </span>
            </p>
            <p className="text-gray-500 grid w-full">
              Connection Token:{" "}
              <span className="text-gray-300">
                <input
                  type="text"
                  className="input input-bordered w-72 md:w-80 p-2 m-2"
                  disabled
                  value={token}
                />
              </span>
              <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                <CopyToClipboard text={token} onCopy={() => setCopied(true)}>
                  <button className="btn">
                    <GrCopy className="mr-2 text-lg" />
                    Copy
                  </button>
                </CopyToClipboard>
                {copied ? (
                  <span className="text-green-500 animate-[wiggle_1s_ease-in-out_infinite] ml-4">
                    <GrFormCheckmark className="mr-2 text-lg ml-3" />
                    Copied
                  </span>
                ) : null}
              </div>
            </p>
            <span className="text-gray-300 p-1">
              <p className="text-gray-500 p-2 grid w-full"> Account Type </p>
              <div className="btn-group btn-group-horizontal">
                <button className="btn btn-active" disabled>
                  Free
                </button>
                <button className="btn">Entry</button>
                <button className="btn">Pro</button>
              </div>
            </span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
