import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Router from "next/router";
import cashier from "../public/cashier.svg";
import Image from "next/image";
import type { NextPage } from "next";

const Signin: NextPage = () => {
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === "authenticated") {
      Router.push("/dashboard");
    }
  }, [session]);

  const loginUser = async () => {
    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: `${window.location.origin}/dashboard`,
    });
    res?.error ? setError(res.error) : setError("");
    res?.error && setIsLoading(false);
  };

  const formSubmit = (e: any) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <section className="h-screen bg-base">
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <Image
                src={cashier}
                className="mr-3 h-6 sm:h-9 w-max"
                alt="Tpanel Logo"
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
                Router.push("/");
              }}
            >
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Inapoi
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container px-6 h-max py-32 bg-base200">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:inline lg:w-6/12 mb-12 md:mb-0">
            <Image
              width={100}
              height={100}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            {error && <div className="text-red-500">{error}</div>}
            <div className="relative">
              <form onSubmit={formSubmit}>
                <div className="hero absolute md:-top-40 -top-[400px]">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-120 shadow-2xl bg-base-100">
                      <div className="card-body">
                        <div className="form-control">
                          <input
                            name="email"
                            type="text"
                            placeholder="email"
                            className="peer border-0 border-b-2 border-gray-900 text-white input focus:outline-none placeholder-transparent"
                            onChange={(e) => setEmail(e.target.value)}
                          />{" "}
                          <label
                            className="label absolute left-12 top-0
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-9
                            peer-focus:text-lg peer-focus:text-gray-400 transition-all"
                            htmlFor="email"
                          >
                            <span className="label-text">Email</span>
                          </label>
                        </div>
                        <div className="form-control space-y-6">
                          <input
                            name="parola"
                            type="password"
                            placeholder="parola"
                            className="mt-6 peer border-0 border-b-2 border-gray-900 text-white input focus:outline-none placeholder-transparent"
                            onChange={(e) => setPassword(e.target.value)}
                          />{" "}
                          <label
                            className="label absolute left-12 top-14
                            peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-[95px]
                            peer-focus:text-lg peer-focus:text-gray-400 transition-all"
                            htmlFor="parola"
                          >
                            <span className="label-text">Parola</span>
                          </label>
                          <label
                            className="label text-gray-200 text-xs cursor-pointer"
                            onClick={() => Router.push("/forgot-password")}
                          >
                            Recuperare parola
                          </label>
                        </div>
                        <div className="form-control mt-6">
                          <button
                            className="btn text-blue-600"
                            type="submit"
                            onClick={() => setIsLoading(true)}
                          >
                            {isLoading ? (
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  stroke-width="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8v8z"
                                ></path>
                              </svg>
                            ) : (
                              <span>Autentificare</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>{" "}
            <div className="text-center lg:text-left md:pt-[250px]">
              <h1 className="text-5xl font-bold text-white">Autentifica-te!</h1>
              <p className="py-6 text-gray-400">
                Bine ați venit la pagina de autentificare. Vă rugăm să
                introduceți adresa de e-mail și parola pentru a va loga în
                contul dvs. Dacă aveți probleme cu conectarea sau ați uitat
                parola, vă rugăm să accesați opțiunea de "Recuperare parola" sau
                să ne contactați pentru asistență. Dacă nu aveți un cont, vă
                rugăm să vă{" "}
                <a href="/register" className="hover:text-blue-600 text-white">
                  înregistrați
                </a>{" "}
                mai întâi pentru a putea utiliza aplicația noastră.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
