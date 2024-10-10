import { useState } from "react";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useEffect } from "react";

export default function ShowTagContainer() {
  const [tag, setTag] = useState([]);
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
  console.log(tag);
  useEffect(() => {
    getTag();
  }, []);
  console.log(tag);
  return (
    <>
      <div
        dir="rtl"
        className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
      >
        {tag.map((value, index) => (
          <div index={index} className="mb-5">
            {value.name}
          </div>
        ))}
      </div>
    </>
  );
}
