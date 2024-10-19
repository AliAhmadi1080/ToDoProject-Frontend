import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ToDoDetailContainer from "./ToDoDetailContainer";
import ToDoSideBar from "./ToDoSideBar";
import GetToDoContext from "../contexts/GetToDoContext";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useNavigate, useParams } from "react-router-dom";
import ToDoCreateContainer from "./ToDoCreateContainer";
import ToDoEditContainer from "./ToDoEditContainer";
import TagToDoListContainer from "./TagToDoContainer";
import TagCreateContainer from "./TagCreateContainer";
import StatusCreateContainer from "./StatusCreateContainer";
import ShowStatusContainer from "./ShowStatusContainer";
import ShowTagContainer from "./ShowTagContainer";
import ToDoListCreateContainer from "./ToDoListCreateContainer";
import ShowToDoListContainer from "./ShowToDoListContainer";

export default function ToDoPage({ which = "detail" }) {
  const navigate = useNavigate();
  const [getAccessToken] = useChangeAccessToken();
  const [todoList, setToDoList] = useState([]);
  const [tagList, setTagList] = useState([]);
  const { todoId } = useParams();
  if (localStorage.getItem("islogin") !== "true") {
    navigate("/login");
  }
  const getToDolist = async () => {
    const response = await fetch("http://localhost:8000/todo/usertodo", {
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
      setToDoList([...data]);
    }
  };
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
      setTagList([...data]);
    }
  };

  useEffect(() => {
    getToDolist();
    getTag();
  }, []);
  if (which === "detail") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            {typeof todoId !== "undefined" ? <ToDoDetailContainer /> : <></>}
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "create") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <ToDoCreateContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "tagshow") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <ShowTagContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "edit") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            {typeof todoId !== "undefined" ? <ToDoEditContainer /> : <></>}
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "tagtodo") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <TagToDoListContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "tagcreate") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <TagCreateContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "statuscreate") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <StatusCreateContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "statusshow") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <ShowStatusContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "todolistcreate") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <ToDoListCreateContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  } else if (which === "todolistshow") {
    return (
      <>
        <div className="flex h-full" dir="ltr">
          <GetToDoContext.Provider value={[todoList, tagList]}>
            <ToDoSideBar />
            <ShowToDoListContainer />
          </GetToDoContext.Provider>
        </div>
      </>
    );
  }
  return <></>;
}
