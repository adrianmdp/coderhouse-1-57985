import Contact from "./Contact";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import { ThemeProvider } from "./contexts/theme";
import { UserContext, UserProvider } from "./contexts/user";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        {/* <Componente1 />
        Todo el resto del contenido
        <Componente2 /> */}
        <Contact />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
