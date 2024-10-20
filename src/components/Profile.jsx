import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <Link to="/login">Login to see profile</Link>;
  else {
    return (
      <div className="flex justify-center items-center">
        <div className="w-[300px] h-[300px] border flex flex-col justify-center items-center bg-gray-100 gap-5 shadow-md">
          <span className="font-bold text-2xl">Profile Page</span>
          <span className="font-semibold text-lg">Name: {user.username}</span>
          <span className="font-semibold text-lg">
            Password: {user.password}
          </span>
        </div>
      </div>
    );
  }
};

export default Profile;
