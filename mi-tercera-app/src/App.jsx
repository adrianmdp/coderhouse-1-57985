import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import { ThemeProvider } from "./contexts/theme";
import { UserProvider } from "./contexts/user";

function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Componente1 />
        Todo el resto del contenido
        <Componente2 />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;
