import { useState } from "react";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useEffect } from "react";
import DangerModal from "./DangerModal";

export default function ShowStatusContainer() {
  const [status, setStatus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [statusId, setStatusId] = useState();

  const getAccessToken = useChangeAccessToken();

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
    getStatus();
  }, []);
  return (
    <>
      <div
        dir="rtl"
        className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
      >
        {status.map((value, index) => (
          <div key={index} className="mb-5 flex justify-between">
            <p>{value.name}</p>
            <button
              onClick={() => {
                setShowModal(true);
                setStatusId(value.id);
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
            title={"حذف وضعیت"}
            text={"آیا شما برای حذف این وضعیت مطمعا هستید؟"}
            isOpen={showModal}
            setIsOpen={setShowModal}
            id={statusId}
            path={`http://localhost:8000/todo/status/${statusId}/`}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
