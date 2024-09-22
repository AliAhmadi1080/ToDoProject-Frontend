import { useParams } from "react-router-dom";
import TagToDoItem from "./TagToDoItem";
import { useEffect, useState } from "react";
import useChangeAccessToken from "../hooks/useChangeAccessToken";

export default function TagToDoContainer() {
  const [getAccessToken] = useChangeAccessToken();
  const tag_slug = useParams("tagSlug").tagSlug;
  const [todos, setTodos] = useState([]);
  const getTagToDo = async () => {
    const response = await fetch(
      "http://localhost:8000/todo/tagtodo/" + tag_slug + "/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access"),
        },
      }
    );

    const data = await response.json();
    if (data["code"] === "token_not_valid") {
      getAccessToken();
    } else {
      setTodos(data);
    }
  };
  useEffect(() => {
    getTagToDo();
  }, [tag_slug]);
  return (
    <div
      dir="rtl"
      className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
    >
      {todos?.map((item, index) => (
        <TagToDoItem id={item.id} title={item.title} subtitle={item.subtitle} key={index} />
      ))}
    </div>
  );
}
