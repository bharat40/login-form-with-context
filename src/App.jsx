import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
