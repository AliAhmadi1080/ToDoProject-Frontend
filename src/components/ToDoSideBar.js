import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import ToDoListContainer from "./ToDoListContainer";
import userInfoContext from "../contexts/UserInfoContext";

export default function ToDoSideBar() {
  let tag = useContext(userInfoContext).tag;
  let todos = useContext(userInfoContext).todolist
  const ToDolist = [...todos];
  const Taglist = [...tag];
  return (
    <div className="text-left px-7 text-lg w-40 ml-2 bg-red-50 max-h-[40rem] overflow-y-auto">
      <h3 className=" text-xl text-center border-b-2 border-black">کار ها</h3>
      {ToDolist.map((item, index) => (
        <ToDoListContainer key={index} title={item.title} todos={item.todos} />
      ))}
      <br />
      <h3 className=" text-xl text-center border-b-2 border-black">تگ ها</h3>
      {Taglist.map((item, index) => (
        <ToDoItem key={index} title={item.title} />
      ))}
    </div>
  );
}
