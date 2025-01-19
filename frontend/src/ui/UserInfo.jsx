import React from "react";
import Container from "./Container";

const UserInfo = ({ currentUser }) => {
  return (
    <Container>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          <img
            src={
              currentUser?.avatar
                ? currentUser?.avatar
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
            }
            alt="userImage"
            className="w-40 h-40"
          />
        </div>
      </div>
    </Container>
  );
};

export default UserInfo;
