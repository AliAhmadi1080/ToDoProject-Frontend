import { useState } from "react";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useEffect } from "react";
import DangerModal from "./DangerModal";

export default function ShowToDoListContainer() {
  const [toDoList, setToDoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [toDoListId, setToDoListId] = useState();

  const getAccessToken = useChangeAccessToken();

  const getToDoList = async () => {
    const response = await fetch("http://localhost:8000/todo/todolist", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    });

    const data = await response.json();
    if (data["code"] === "token_not_valid") {
      getAccessToken();
    } else {
      setToDoList(data);
    }
  };
  useEffect(() => {
    getToDoList();
  }, []);
  return (
    <>
      <div
        dir="rtl"
        className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
      >
        {toDoList.map((value, index) => (
          <div key={index} className="mb-5 flex justify-between">
            <p>{value.name}</p>
            <button
              onClick={() => {
                setShowModal(true);
                setToDoListId(value.id);
              }}
              className="bg-red-500 rounded-xl text-white p-1"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <div dir="rtl">
        {showModal ? (
          <DangerModal
            title={"حذف لیست"}
            text={"آیا شما برای حذف این لیست مطمعا هستید؟"}
            isOpen={showModal}
            setIsOpen={setShowModal}
            id={toDoListId}
            path={`http://localhost:8000/todo/todolist/${toDoListId}/`}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
