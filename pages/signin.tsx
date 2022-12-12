import React, { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import Router from "next/router";
import logo from "../public/tpanel2.png";
import Image from "next/image";
import type { NextPage } from "next";

const Signin: NextPage = () => {
  const session = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
            <a href="https://flowbite.com" className="flex items-center">
              <Image
                width={100}
                height={100}
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
                Router.push("/");
              }}
            >
              <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Back to Home
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className="container px-6 h-max py-32 bg-base200">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <Image
              width={100}
              height={100}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Login now!</h1>
              <p className="py-6 text-gray-400">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <form onSubmit={formSubmit}>
              <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-120 shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="text"
                          placeholder="email"
                          className="input input-bordered"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder="password"
                          className="input input-bordered"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className="label">
                          <a
                            href="#"
                            className="label-text-alt link link-hover"
                          >
                            Forgot password?
                          </a>
                        </label>
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
