import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
import "/public/css/otr.css";
import "/public/css/style.css";
import "/public/css/style(1).css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [routes, setRoutes] = useState([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/market", element: <Market /> },
    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/liverates", element: <Liverates /> },
    { path: "/update", element: <Update /> },
    { path: "/bank-detail", element: <BankDetail /> },
    { path: "/economic-calendar", element: <EconomicCalendar /> },
  ]);
  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((item, index) => (
          <Route path={item.path} key={index} element={item.element} />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;