import { useNavigate, useParams } from "react-router-dom";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useEffect, useState } from "react";
import DangerModal from "./DangerModal";

export default function ToDoDetailContainer() {
  const navigate = useNavigate();
  const [toDo, setToDo] = useState({});
  const [status, setStatus] = useState();
  const [showModal, setShowModal] = useState(false);

  const [getAccessToken] = useChangeAccessToken();
  const { todoId } = useParams();
  const getToDo = async () => {
    const response = await fetch("http://localhost:8000/todo/" + todoId + "/", {
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
      setToDo(data);
    }
  };
  const getStatus = async () => {
    const response = await fetch("http://localhost:8000/todo/status", {
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
      setStatus(data);
    }
  };
  useEffect(() => {
    getToDo();
    getStatus();
  }, [todoId]);
  return (
    <div
      dir="rtl"
      className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
    >
      <div className="head flex flex-col">
        <h3 className=" text-3xl">{toDo?.title}</h3>
        <h4 className=" text-lg my-2">{toDo?.subtitle}</h4>
      </div>
      <textarea
        disabled
        value={toDo?.description}
        className="w-2/3 rounded-xl p-3 bg-gray-200 h-32"
      ></textarea>
      <br />
      <div className=" grid grid-cols-3 gap-5 px-6 w-full">
        <div className=" text-center">
          <h6 className="text-lg">تگ ها</h6>
          <ul dir="ltr">
            {toDo.tags?.map((item, index) => (
              <li key={index}>{item?.name}</li>
            ))}
          </ul>
        </div>
        <div className=" col-span-2 py-6 flex">
          <p className="mx-3">وضعیت:</p>

          {status?.map((item, index) =>
            item.id === toDo.status ? <p>{item.name}</p> : <></>
          )}
        </div>
      </div>
      <div dir="ltr" className=" flex justify-around">
        <button
          className="bg-red-500 w-full text-white p-2 rounded-xl"
          onClick={() => {
            setShowModal(true);
          }}
        >
          حذف
        </button>
        <button
          className="bg-sky-600 w-full text-white p-2 rounded-xl"
          onClick={() => {
            navigate("/todo/" + todoId + "/edit/");
          }}
        >
          ویرایش
        </button>
      </div>
      {showModal ? (
        <DangerModal
          title={"هشدار"}
          text={"آیا شما برای حذف این کار مطمعا هستید؟"}
          isOpen={showModal}
          setIsOpen={setShowModal}
          id={todoId}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
