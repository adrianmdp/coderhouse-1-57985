const { createContext, useState, useContext } = require("react");

const TeamContext = createContext({
  players: [],
});

const TeamProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <TeamContext.Provider value={{ players, setPlayers }}>
      {children}
    </TeamContext.Provider>
  );
};

const useTeam = () => useContext(TeamContext);

export { TeamContext, TeamProvider, useTeam };
