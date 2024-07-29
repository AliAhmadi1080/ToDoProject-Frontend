import { useState } from "react";
import userInfoContext from "./contexts/UserInfoContext";
import ToDoDetailPage from "./components/ToDoDetailpage";


function App() {
  const [usernameInfo, ] = useState({
    username: "علی",
    isauth: true,
  });
  const [tag, ] = useState([{ title: "life" }, { title: "زندگی" }]);
  const [toDolist, ] = useState([
    { title: "خانه", todos: ["ظرف", "ماشین"] },
  ]);

  return (
    <userInfoContext.Provider
      value={{ user: usernameInfo, tag: tag, todolist: toDolist }}
    >
      <ToDoDetailPage />
    </userInfoContext.Provider>
  );
}

export default App;
