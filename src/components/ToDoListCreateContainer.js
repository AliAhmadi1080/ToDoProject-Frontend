import { useState } from "react";

export default function ToDoListCreateContainer() {
  const createToDoList = async () => {
    const response = await fetch("http://localhost:8000/todo/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify({ name: inputName }),
    });

    if (response.ok) {
    } else {
    }
  };
  const [inputName, setInputName] = useState("");
  return (
    <>
      <div
        dir="rtl"
        className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
      >
        <div className="my-5">
          <label htmlFor="ToDoListCreateContainerNameInput" className="ml-5 mr-2">
            نام لیست:
          </label>
          <input
            className="text-lg rounded bg-slate-100 w-2/3 px-3"
            id="ToDoListCreateContainerNameInput"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <button
          onClick={() => createToDoList()}
          className=" bg-sky-600 w-full text-white p-2 rounded-b-xl hover:shadow-2xl hover:bg-sky-700"
        >
          ایجاد
        </button>
      </div>
    </>
  );
}
