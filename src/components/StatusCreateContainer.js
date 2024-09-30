import { useState } from "react";

export default function StatusCreateContainer() {
    const createStatus = async () => {
        const response = await fetch("http://localhost:8000/todo/status", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access"),
          },
          body: JSON.stringify({name:inputName})
        });
    
        if (response.ok) {
            console.log('ok')
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
          <label htmlFor="StatusCreateContainerNameInput" className="ml-5 mr-2">
            نام وضعیت:
          </label>
          <input
            className="text-lg rounded bg-slate-100 w-2/3 px-3"
            id="StatusCreateContainerNameInput"
            onChange={(e) => {
              setInputName(e.target.value);
            }}
          />
        </div>
        <button onClick={()=>createStatus()} className=" bg-sky-600 w-full text-white p-2 rounded-b-xl hover:shadow-2xl hover:bg-sky-700">
          ایجاد
        </button>
      </div>
    </>
  );
}
