import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar";
import Detail from "./pages/Detail";
import { TeamProvider } from "./contexts/Team";

function App() {
  return (
    <BrowserRouter>
      <TeamProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inhabitants/:name" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </TeamProvider>
    </BrowserRouter>
  );
}

export default App;
