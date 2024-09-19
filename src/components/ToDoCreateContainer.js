import { useParams } from "react-router-dom";
import useChangeAccessToken from "../hooks/useChangeAccessToken";
import { useContext, useEffect, useState } from "react";
import GetToDoContext from "../contexts/GetToDoContext";

export default function ToDoCreateContainer() {
  const [tagList, setTagList] = useState([]);
  const [status, setStatus] = useState();

  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [description, setDescription] = useState();
  const [inputStatus, setInputStatus] = useState();
  const [inputTagList, setInputTagList] = useState();
  const [toDoList, setToDoList] = useState();
  const [toDoListInput, setToDoListInput] = useState();
  const [isOkayCreate, setIsOkayCreate] = useState();
  const [getAccessToken] = useChangeAccessToken();
  const { todoId } = useParams();

  const getTag = async () => {
    const response = await fetch("http://localhost:8000/todo/tag", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
    });

    let data = await response.json();

    if (data["code"] === "token_not_valid") {
      getAccessToken();
    } else {
      setTagList(data);
    }
  };
  const createToDo = async () => {
    const response = await fetch("http://localhost:8000/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"),
      },
      body: JSON.stringify({
        title: title,
        subtitle: subtitle,
        description: description,
        status: inputStatus,
        tags: inputTagList,
        todo_list: toDoListInput,
      }),
    });

    if (response.ok) {
      setIsOkayCreate("true");
    } else {
      setIsOkayCreate("false");
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
      setInputStatus(data[0].id.toString());
    }
  };
  const todoList = useContext(GetToDoContext)[0];

  useEffect(() => {
    getStatus();
    getTag();
    setToDoListInput(todoList[0]?.id);
  }, [todoId]);

  useEffect(() => {
    setToDoList(todoList);
    setToDoListInput(todoList[0]?.id);
  }, [todoList]);

  return (
    <div
      dir="rtl"
      className=" bg-slate-50 flex flex-col w-2/5 h-fit mx-auto mt-24 p-3"
    >
      <div className="head flex flex-col">
        <input
          className="text-3xl rounded bg-slate-100 w-2/3 px-3"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="عنوان"
        />
        <input
          className="text-lg my-2 rounded bg-slate-100 w-2/3 px-3"
          onChange={(event) => {
            setSubtitle(event.target.value);
          }}
          placeholder="زیر عنوان"
        />
      </div>
      <textarea
        className="w-2/3 rounded-xl p-3 bg-gray-200 h-32"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
        placeholder="توضیحات بیشتر"
      ></textarea>
      <br />
      <div className="border px-6 w-full">
        <div className=" grid grid-cols-3 gap-5 ">
          <div className=" text-center">
            <h6 className="text-lg">تگ ها</h6>
            <select
              onChange={(e) => {
                const options = [...e.target.selectedOptions];
                const values = options.map((option) => parseInt(option.value));
                setInputTagList(values);
              }}
              multiple
              className="m-3 border p-2"
            >
              {tagList?.map((item, index) => (
                <option key={index} value={item?.id}>
                  {item?.name}
                </option>
              ))}
            </select>
          </div>
          <div className=" col-span-2 py-6 flex">
            <label className="mt-2 mx-3">وضعیت:</label>
            <div className="relative h-10 w-72 min-w-[200px]">
              {/* material tailwind */}

              <select
                onChange={(event) => setInputStatus(event.target.value)}
                className="peer h-full w-full rounded-[7px] border border-blue-200 border-t-transparent bg-transparent pr-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              >
                {status?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                وضعیت
              </label>
            </div>
          </div>
        </div>
        <div className="relative h-10 mt-4 w-72 min-w-[200px]">
          {/* material tailwind */}

          <select
            onChange={(event) => setToDoListInput(event.target.value)}
            className="peer h-full w-full rounded-[7px] border border-blue-200 border-t-transparent bg-transparent pr-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          >
            {toDoList?.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            انتخاب لیست
          </label>
        </div>
      </div>
      <div dir="ltr" className=" flex justify-around">
        <button
          className=" bg-sky-600 w-full text-white p-2 rounded-b-xl hover:shadow-2xl hover:bg-sky-700"
          onClick={() => {
            createToDo();
          }}
        >
          ایجاد
        </button>
      </div>

      {isOkayCreate === "true" ? (
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">پیام</p>
          <p className="text-sm">با موفقیت فورم ارسال شد</p>
        </div>
      ) : (
        <></>
      )}
      {isOkayCreate === "false" ? (
        <div
          className="bg-red-100 border px-14 border-red-400 text-red-700  py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">خطا در ایجاد</strong>
          <br />
          <span className="block sm:inline">
            در ایجاد مشکلی وجود دارد. مطمعا شوید همه فیلد هارو پر کردید
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
