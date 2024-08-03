import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterFormPage from "./components/RegisterFormPage";
import LoginFormPage from './components/LoginFormPage'
import userInfoContext from "./contexts/UserInfoContext";
function App() {
  const [usernameInfo] = useState({
    username: "علی",
    isauth: true,
  });
  const [tag] = useState([{ title: "life" }, { title: "زندگی" }]);
  const [toDolist] = useState([{ title: "خانه", todos: ["ظرف", "ماشین"] }]);

  return (
    <userInfoContext.Provider value={{ user: usernameInfo, tag: tag, todolist: toDolist }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterFormPage />} />
          <Route path="/login" element={<LoginFormPage />} />
        </Routes>
      </BrowserRouter>
    </userInfoContext.Provider>
  );
}

export default App;
