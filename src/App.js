import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import BottomNavigationBar from "./components/BottomNavigationBar";
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
    <BrowserRouter>
      <div>
        <BottomNavigationBar />
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
    </BrowserRouter>
  );
};
export default App;
