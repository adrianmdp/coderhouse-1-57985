import { BrowserRouter, Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import "./assets/css/global.css";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:pokemonName" element={<Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
