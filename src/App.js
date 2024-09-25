import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterFormPage from "./components/RegisterFormPage";
import LoginFormPage from "./components/LoginFormPage";
import userInfoContext from "./contexts/UserInfoContext";
import ToDoPage from "./components/ToDoPage";
function App() {
  const [usernameInfo] = useState({
    username: "علی",
    isauth: localStorage.getItem("islogin") === "true" ? true : false,
  });

  return (
    <userInfoContext.Provider value={{ user: usernameInfo }}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<RegisterFormPage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/todo/tag/:tagSlug" element={<ToDoPage which="tagtodo" />} />
          <Route path="/todo/:todoId" element={<ToDoPage which='detail'/>} />
          <Route path="/todo/:todoId/edit" element={<ToDoPage which='edit'/>} />
          <Route path="/todo/create" element={<ToDoPage which='create'/>} />
          <Route path="/todo/" element={<ToDoPage />} />
        </Routes>
      </BrowserRouter>
    </userInfoContext.Provider>
  );
}

export default App;
