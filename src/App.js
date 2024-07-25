import { useState } from "react";
import Navbar from "./components/Navbar";
import userInfoContext from "./contexts/UserInfoContext";

function App() {
  const [ usernameInfo, setUsernameInfo ] = useState({'username':'علی','isauth':true});

  return (
    <userInfoContext.Provider value={usernameInfo}>
      <Navbar />
    </userInfoContext.Provider>
  );
}

export default App;
