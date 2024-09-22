import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import ToDoListContainer from "./ToDoListContainer";
import GetToDoContext from "../contexts/GetToDoContext";

export default function ToDoSideBar() {
  let todos = useContext(GetToDoContext)[0];
  let tags = useContext(GetToDoContext)[1];
  let ToDolist = [];
  todos.forEach((element) => {
    let todos = [];
    element.todo_list.forEach((item) => {
      todos.push({ title: item.title, id: item.id });
    });
    let todolist = { title: element.name, todos: todos };
    ToDolist.push(todolist);
  });
  
  const Taglist = [...tags];
  return (
    <div className="text-left px-3 text-lg w-40 ml-2 bg-red-50 max-h-[40rem] overflow-y-auto">
      <h3 className=" text-xl text-center border-b-2 border-black">کار ها</h3>
      {ToDolist.map((item, index) => (
        <ToDoListContainer key={index} title={item.title} todos={item.todos} />
      ))}

      <br />
      <h3 className=" text-xl text-center border-b-2 border-black">تگ ها</h3>
      {Taglist.map((item, index) => (
        <ToDoItem key={index} tagSlug={item.slug} title={item.name} />
      ))}
    </div>
  );
}
