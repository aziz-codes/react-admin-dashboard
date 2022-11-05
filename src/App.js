import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  User,
  Financial,
  Progress,
  Projects,
  Community,
  Settings,
} from "./pages";

const App = () => {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          {activeMenu ? (
            <div
              className="w-64 fixed sidebar
             dark:bg-secondary-dark-bg
            bg-white shadow-xl"
            >
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-bg bg-main-bg ml-72 flex-2 flex-wrap
                min-h-screen w-full ${activeMenu ? " md:ml-72" : "flex-2"}`}
          >
            <div className="md:static bg-main-bg dark:bg-main-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              <Routes>
                {/* Dashboard */}

                <Route path="/" element={<Projects />} />
                <Route path="/user" element={<User />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/community" element={<Community />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;
