import { BrowserRouter, Routes, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import "./assets/css/global.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Prueba from "./pages/Prueba";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:pokemonName" element={<Detail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prueba" element={<Prueba />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
