import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="fidget-spinner-loading"
        wrapperStyle={{}}
        wrapperClass="fidget-spinner-wrapper"
        backgroundColor="#ee83a8"
        ballColors={["#d2d5e6", "#4e6e9e", "#6c2ec9"]}
      />
      <p className="text-white text-2xl font-bold tracking-widest">
        Loading...
      </p>
    </div>
  );
};

export default Loading;
