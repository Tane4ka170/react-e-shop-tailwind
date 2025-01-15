import React, { useState } from "react";
import Login from "./Login";

const Registration = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {!login ? (
        <Login />
      ) : (
        <div className="bg-gray-950 rounded-lg">
          <form className="max-w-5xl mx-auto pt-10 px-10 lg:px-0 text-white">
            <div>
              <h2>Registration Form</h2>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Registration;
