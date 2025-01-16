import React, { useState } from "react";
import Login from "./Login";
import Label from "./Label";

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
              <div>
                <div>
                  <Label title="First name" htmlFor="firstName" />
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
