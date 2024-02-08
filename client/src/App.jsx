import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Market from "./components/Market/Market";
import Signup from "./components/LoginSignup/Signup";
import Login from "./components/LoginSignup/Login";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Liverates from "./components/Liverates/Liverates";
import Update from "./components/Update/Update";
import BankDetail from "./components/BankDetail/BankDetail";
import EconomicCalendar from "./components/Economic-calendar/EconomicCalendar";
import Error404 from "./components/common/Error404";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Dashboard Data
import DashFooter from "./components/dashboard/components/body/Footer/DashFooter";
import DashNavbar from "./components/dashboard/components/body/Navbar/DashNavbar";
import DashAbout from "./components/dashboard/components/body/about/DashAbout";
import DashContact from "./components/dashboard/components/body/contact/DashContact";
import DashMarket from "./components/dashboard/components/body/market/DashMarket";
import DashBackDetails from "./components/dashboard/components/body/bankDetail/DashBankDetails";
import DashColorChanging from "./components/dashboard/components/body/colorChanging/DashColorChanging";
import "bootstrap/dist/css/bootstrap.min.css";
import "/public/css/otr.css";
import "/public/css/style.css";
import "/public/css/style(1).css";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
  const location = useLocation();

  const [routes, setRoutes] = useState([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/market", element: <Market /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/liverates", element: <Home /> },
    { path: "/update", element: <Update /> },
    { path: "/bank-detail", element: <BankDetail /> },
    { path: "/economic-calendar", element: <EconomicCalendar /> },
  ]);

  return (
    <>
      {location.pathname !== "/admin" &&
        !location.pathname.startsWith("/admin/") && (
          <Navbar className="navbar-responsive" />
        )}
      <Routes>
        {routes.map((item, index) => (
          <Route path={item.path} key={index} element={item.element} />
        ))}
        <Route path="/admin" element={<Dashboard />}>
          <Route path="/admin" element={<h1>hello</h1>} />
          <Route path="/admin/footer" element={<DashFooter />} />
          <Route path="/admin/navbar" element={<DashNavbar />} />
          <Route path="/admin/about" element={<DashAbout />} />
          <Route path="/admin/contact" element={<DashContact />} />
          <Route path="/admin/market" element={<DashMarket />} />
          <Route path="/admin/bank" element={<DashBackDetails />} />
          <Route path="/admin/color" element={<DashColorChanging />} />
          <Route path="/admin/update" element={<h1>Helo World</h1>} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
      {location.pathname !== "/dashboard" && <Footer className="footer" />}
    </>
  );
};

export default App;
