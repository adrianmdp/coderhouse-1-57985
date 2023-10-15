import Contact from "./Contact";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import { ThemeProvider } from "./contexts/theme";
import { UserContext, UserProvider } from "./contexts/user";
import AddUser from "./pages/AddUser";
import UserDetail from "./pages/UserDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/users/add" element={<AddUser />} />
          </Routes>
        </BrowserRouter>

        {/* <Componente1 />
        Todo el resto del contenido
        <Componente2 /> */}
        {/* <UserDetail /> */}
        {/* <Contact /> */}
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
