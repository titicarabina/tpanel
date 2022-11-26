import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { useSession, signIn, signOut } from "next-auth/react";
import Router from "next/router";
type Props = {};

export default function index({}: Props) {
  const session = useSession();
  const [loading, setLoading] = useState("");
  useEffect(() => {
    if (session.status === "unauthenticated") {
      Router.push("/");
    }
    setLoading(session.status);
  }, [session]);
  return (
    <>
      {loading === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div className="flex w-full">
          <SideBar />
          <div className="flex items-center justify-center w-full">
            <p className="text-xl">Dashboard Page</p>
          </div>
        </div>
      )}
    </>
  );
}
