import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../public/tpanel2.png";
import Image from "next/image";
import { validate as uuidValidate } from "uuid";
import type { NextPage } from "next";

const Resetpassword: NextPage = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.query && router.query.token) {
      if (!uuidValidate(router.query.token as string)) {
        setError("invalid");
        console.log("invalid");
      }
    }
  }, [router.query]);
  const submit = (e: any) => {
    e.preventDefault();
    if (newPassword !== newPasswordRepeat) {
      setError("not_equal");
    } else {
      setIsLoading(true);
      const token = router.query && router.query.token;
      const options = {
        method: "POST",
        body: JSON.stringify({
          password: newPassword,
          token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("/api/auth/reset-password", options)
        .then(async (res) => {
          if (res.status !== 200) {
            const errorMessage = res.status === 500 ? "unexpected" : "expired";
            setError("eroare");
            console.log(res.status);
          } else {
            setIsSuccess(true);
            setError("");
          }
          setIsLoading(false);
        })
        .catch((e) => {
          setError("unexpected");
          setIsLoading(false);
        });
    }
  };
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
              <Image
                src={logo}
                className="mr-3 h-6 sm:h-9 w-max"
                alt="Tpanel Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                TPanel
              </span>
            </a>
            <div
              className="flex items-center lg:order-2 cursor-pointer"
              onClick={function () {
                router.push("/signin");
              }}
            >
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Log in
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            ></div>
          </div>
        </nav>
      </header>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            {error === "invalid" ? (
              <div>
                <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  Link Invalid or Expired!
                </h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                  {" "}
                  The link is Expired or Invalid , you will be redirected in 5
                  sec.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  {isSuccess ? "Password changed" : "Reset password"}
                </h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                  {isSuccess
                    ? "Your password has been changed."
                    : "Please enter your new password. This link is active for 24 hrs."}
                </p>
                {!isSuccess ? (
                  <div>
                    <input
                      type="password"
                      className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                      placeholder="New password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                      type="password"
                      className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:bg-white"
                      placeholder="Repeat new password"
                      value={newPasswordRepeat}
                      onChange={(e) => setNewPasswordRepeat(e.target.value)}
                    />
                    <button
                      className="w-full px-4 py-2 mb-4 text-white bg-blue-700 rounded-lg focus:outline-none focus:bg-blue-600"
                      onClick={submit}
                    >
                      {isLoading ? "Loading..." : "Reset password"}
                    </button>
                    {error === "expired" ? (
                      <p className="text-red-500">This link is expired.</p>
                    ) : error === "unexpected" ? (
                      <p className="text-red-500">
                        An unexpected error occurred.
                      </p>
                    ) : error === "not_equal" ? (
                      <p className="text-red-500">Passwords are not equal.</p>
                    ) : error === "eroare" ? (
                      <p className="text-red-500">
                        Eroare , Link expirat sau token invalid.
                      </p>
                    ) : (
                      <div></div>
                    )}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resetpassword;
