import { useState } from "react";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useEffect } from "react";
import DangerModal from "./DangerModal";

export default function ShowTagContainer() {
  const [tag, setTag] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [tagId,setTagId] = useState()

  const getAccessToken = useChangeAccessToken();

  const getTag = async () => {
    const response = await fetch("http://localhost:8000/todo/tag", {
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
      setTag(data);
    }
  };
  useEffect(() => {
    getTag();
  }, []);
  return (
    <>
      <div
        dir="rtl"
        className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
      >
        {tag.map((value, index) => (
          <div key={index} className="mb-5 flex justify-between">
            <p>{value.name}</p>
            <button
              onClick={() => {setShowModal(true);setTagId(value.id)}}
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
            title={"حذف تگ"}
            text={"آیا شما برای حذف این تگ مطمعا هستید؟"}
            isOpen={showModal}
            setIsOpen={setShowModal}
            id={tagId}
            path={`http://localhost:8000/todo/tag/${tagId}/`}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
