import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar";
import type { NextPage } from "next";
import { GrCopy, GrFormCheckmark } from "react-icons/gr";
import { CopyToClipboard } from "react-copy-to-clipboard";
import clientPromise from "../../../lib/mongodb";
import { useSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";
import authOptions from "../../../pages/api/auth/[...nextauth]";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../model/User";

type userData = {
  user: {
    connection_token: string;
    createdAt: string;
    email: string;
    hashedPassword: string;
    isAdmin: boolean;
    public_token: string;
    role: string;
    username: string;
    __v: number;
    _id: string;
  };
};

const Index = (user: userData) => {
  const [nume_companie, setServerName] = React.useState("SC VICRI SRL");
  const [licenseRenewal, setLicenseRenewal] = React.useState("2024-01-01");
  const [copied, setCopied] = React.useState(false);
  const [userData, setUserData] = React.useState(user);
  const [secCopied, setSecCopied] = React.useState(false);
  return (
    <div className="flex">
      <SideBar />
      <div className="flex items-center justify-center p-5 w-screen">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Setari</h2>
            <p className="text-gray-500 p-2">
              Nume companie:{" "}
              <span className="text-gray-300">
                <input
                  type="text"
                  className="input input-bordered"
                  value={nume_companie}
                  onChange={(e) => setServerName(e.target.value)}
                />
              </span>
            </p>
            <p className="text-gray-500 p-2">
              Expirare licenta:{" "}
              <span className="text-gray-300">
                <input
                  type="date"
                  className="input input-bordered"
                  disabled
                  value={licenseRenewal}
                />
              </span>
            </p>
            <p className="text-gray-500 grid w-full">Token API: </p>
            <span className="text-gray-300">
              <input
                type="text"
                className="input input-bordered w-72 md:w-80 p-2 m-2"
                disabled
                value={userData.user.public_token}
                readOnly
              />
            </span>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <CopyToClipboard
                text={userData.user.public_token}
                onCopy={() => setCopied(true)}
              >
                <button className="btn">
                  <GrCopy className="mr-2 text-lg" />
                  Copiaza
                </button>
              </CopyToClipboard>
              {copied ? (
                <span className="text-green-500 animate-[wiggle_1s_ease-in-out_infinite] ml-4">
                  <GrFormCheckmark className="mr-2 text-lg ml-3" />
                  Copiat
                </span>
              ) : null}
            </div>
            <p className="text-gray-500 grid w-full">Token API Secret: </p>
            <span className="text-gray-300 select-none">
              <input
                type="text"
                className="input input-bordered w-72 md:w-80 p-2 m-2 blur-sm select-none cursor-pointer hover:blur-none"
                value={userData.user.connection_token}
                readOnly
              />
            </span>
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <CopyToClipboard
                text={userData.user.connection_token}
                onCopy={() => setSecCopied(true)}
              >
                <button className="btn">
                  <GrCopy className="mr-2 text-lg" />
                  Copiaza
                </button>
              </CopyToClipboard>
              {secCopied ? (
                <span className="text-green-500 animate-[wiggle_1s_ease-in-out_infinite] ml-4">
                  <GrFormCheckmark className="mr-2 text-lg ml-3" />
                  Copiat
                </span>
              ) : null}
            </div>
            <span className="text-gray-300 p-1">
              <p className="text-gray-500 p-2 grid w-full"> Tip Cont </p>
              <div className="btn-group btn-group-horizontal">
                <button className="btn btn-active" disabled>
                  Gratuit
                </button>
                <button className="btn">Entry</button>
                <button className="btn">Pro</button>
              </div>
            </span>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Salvare</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Session = {
  user: {
    email: string;
  };
  expires: string;
};

export const getServerSideProps = async (context: any) => {
  var userReturnData = null;
  const session: Session | null = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    session.user = {
      email: session.user.email,
    };
  }
  await dbConnect();
  const client = await clientPromise;
  const user = await User.findOne({ email: session.user.email });
  userReturnData = {
    email: user?.email,
    connection_token: user?.connection_token,
    server_name: user?.server_name,
    license_renewal: user?.license_renewal,
    public_token: user?.public_token,
    isAdmin: user?.isAdmin,
    role: user?.role,
    username: user?.username,
  };
  client.close();
  return {
    props: {
      user: JSON.parse(JSON.stringify(userReturnData)),
    },
  };
};

export default Index;
