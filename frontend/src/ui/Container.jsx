/* eslint-disable react/prop-types */
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  const newClassName = twMerge(
    "max-w-screen mx-auto py-10 px-4 lg:px-0",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
