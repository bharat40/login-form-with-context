import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    setUser({ username, password });
    // go to /profile page
    navigate("/profile");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[300px] h-[300px] border flex flex-col justify-center items-center bg-gray-100 gap-5 shadow-md">
        <span className="font-bold text-2xl">Login Form</span>
        <label htmlFor="username">
          <span className="font-semibold">Username: </span>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-1 rounded-sm ml-2 border"
          />
        </label>
        <label htmlFor="password">
          <span className="font-semibold">Password: </span>
          <input
            type="text"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 rounded-sm ml-2 border"
          />
        </label>
        <button onClick={handleSubmit} className="bg-blue-400 w-[270px] py-1">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
