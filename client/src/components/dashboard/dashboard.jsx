import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="flex justify-content-between ">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
