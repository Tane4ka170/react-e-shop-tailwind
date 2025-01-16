import React, { useState } from "react";
import Login from "./Login";
import Label from "./Label";
import { MdAddAPhoto } from "react-icons/md";

const Registration = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {!login ? (
        <Login />
      ) : (
        <div className="bg-gray-950 rounded-lg">
          <form className="max-w-5xl mx-auto pt-10 px-10 lg:px-0 text-white">
            <div className="border-b border-b-white/10 pb-5">
              <h2 className="text-lg font-semibold uppercase leading-7">
                Registration Form
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                You must provide the necessary information to register with us
              </p>
            </div>

            <div className="border-b border-b-white/10 pb-5">
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <Label title="First name" htmlFor="firstName" />
                  <input
                    type="text"
                    name="firstName"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inet ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                  />
                </div>
                <div className="sm:col-span-3">
                  <Label title="Last name" htmlFor="lastName" />
                  <input
                    type="text"
                    name="email"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inet ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                  />
                </div>
                <div className="sm:col-span-4">
                  <Label title="Email address" htmlFor="email" />
                  <input
                    type="email"
                    name="firstName"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inet ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                  />
                </div>
                <div className="sm:col-span-5">
                  <Label title="Password" htmlFor="password" />
                  <input
                    type="password"
                    name="password"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 px-4 outline-none text-white shadow-sm ring-1 ring-inet ring-white/10 focus:ring-skyText sm:text-sm sm:leading-6 mt-2"
                  />
                </div>

                <div className="col-span-full">
                  <div className="mt-2 flex items-center gap-x-3">
                    <div className="flex-1">
                      <Label title="Cover photo" />
                      <div className="mt-2 flex justify-center rounded-lg border  border-dashed border-white/25 px-6 py-4">
                        <div>
                          <div>
                            <MdAddAPhoto />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
