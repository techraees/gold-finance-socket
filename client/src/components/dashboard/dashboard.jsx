import React from "react";
import SideBar from "./components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="d-flex justify-content-between gap-5  ">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
