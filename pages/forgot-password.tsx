import { useRouter } from "next/router";
import React, { useState } from "react";
import cashier from "../public/cashier.svg";
import Image from "next/image";
import type { NextPage } from "next";

type Props = {};

const Forgotpassword: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const submit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const options = {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("/api/auth/forgot-password", options)
      .then(async (res) => {
        if (res.status === 200) {
          setIsSuccess(true);
        }
        setIsLoading(false);
      })
      .catch((e) => setIsError(true));
  };
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <Image
                src={cashier}
                className="mr-3 h-6 sm:h-9 w-max"
                alt="RegLine Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-500">
                <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-500">
                  Reg
                </span>
                Line
              </span>
            </a>
            <div
              className="flex items-center lg:order-2 cursor-pointer"
              onClick={function () {
                router.push("/signin");
              }}
            >
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Autentificare
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
            {isSuccess ? (
              <>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Am trimis un email la {email} .
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Te rugăm să verifici casuta ta de e-mail și să accesezi
                  link-ul pentru a-ți reseta parola. Dacă e-mail-ul nu apare în
                  câteva minute, te rugăm să verifici folder-ul de spam. Te
                  rugăm să ții cont că dacă adresa ta de e-mail nu este
                  înregistrată, nu vei primi un e-mail.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  Ai uitat parola?
                </h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Introdu adresa ta de email si iti vom trimite un link pentru
                  a-ti reseta parola.
                </p>
                <div className="mt-8">
                  <div className="mt-6">
                    <form className="space-y-6" onSubmit={submit}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                      >
                        Adresa de email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:placeholder-gray-500 dark:focus:ring-blue-600 dark:focus:border-blue-600"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          disabled={isLoading}
                        >
                          {isLoading ? "Incarcare..." : "Resetează parola"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Forgotpassword;
