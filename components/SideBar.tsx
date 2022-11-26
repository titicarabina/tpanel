import React, { useState } from "react";
import { HiMenuAlt3, HiLogout, HiUser } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import {
  AiOutlineUser,
  AiOutlineDeploymentUnit,
  AiFillCar,
} from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const menus = [
    { name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    {
      name: "Players",
      link: "/dashboard/players",
      icon: AiOutlineUser,
      margin: true,
    },
    { name: "Items", link: "/dashboard/items", icon: AiOutlineDeploymentUnit },
    { name: "Cars", link: "/dashboard/cars", icon: AiFillCar },
    {
      name: "Logs",
      link: "/dashboard/logs",
      icon: FiMessageSquare,
      margin: true,
    },
    {
      name: "Analityics",
      link: "/dashboard/analitycs",
      icon: TbReportAnalytics,
    },
    {
      name: "Settings",
      link: "/dashboard/settings",
      icon: RiSettings4Line,
      margin: true,
    },
    {
      name: "Profile",
      link: "/dashboard/settings",
      icon: HiUser,
      margin: true,
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-[#0e0e0e] min-h-screen h-full ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4 z-[11]`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {menus?.map((menu: any, i: any) => (
          <Link
            href={menu?.link}
            key={i}
            className={` ${
              menu?.margin && "mt-5"
            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-4 relative">
        <Link
          onClick={() => signOut()}
          href="/"
          className={`mt-5 group flex text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md items-center`}
        >
          <div>
            <HiLogout />
          </div>
          <h2
            style={{
              transitionDelay: `${5}00ms`,
            }}
            className={`whitespace-pre duration-500 ${
              !open && "opacity-0 translate-x-28 overflow-hidden"
            }`}
          >
            Logout
          </h2>
          <h2
            className={`${
              open && "hidden"
            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
          >
            Logout
          </h2>
        </Link>
      </div>
    </div>
  );
}
