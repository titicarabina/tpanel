import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import logo from "../public/tpanel2.png";
import Image from "next/image";
import Router from "next/router";
import axios from "axios";
import type { NextPage } from "next";

const Register: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false); // TODO loading screen
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  useEffect(() => {
    if (!!session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const registerUser = async () => {
    try {
      const res = await axios({
        method: "POST",
        url: "/api/auth/register",
        data: {
          username,
          email,
          password,
        },
      });
      if (res) {
        signIn("credentials", {
          redirect: false,
          email,
          password,
        });
      }
    } catch (error: any) {
      setError(error.response.data.error);
    }
  };

  const signUp = (e: any) => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setError("The passwords do not match.");
    } else {
      registerUser();
    }
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
            <form onSubmit={signUp}>
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
                          <span className="label-text">Username</span>
                        </label>
                        <input
                          type="text"
                          placeholder="username"
                          className="input input-bordered"
                          onChange={(e) => setUsername(e.target.value)}
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
                          <span className="label-text">Repeat Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder="repeat password"
                          className="input input-bordered"
                          onChange={(e) => setPasswordRepeat(e.target.value)}
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

export default Register;
