import { useState } from "react";
import Input from "./Input";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("islogin"));
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/api-auth/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setIsLogin(true);
      localStorage.setItem("islogin", "true");
      localStorage.setItem("refresh", data["refresh"]);
      localStorage.setItem("access", data["access"]);
    } else {
      console.error(data.message);
    }
  };
  return (
    <>
      <div className="pb-5 mt-[8rem] shadow-xl">
        <form onSubmit={submitHandler}>
          <Input onchange={emailChangeHandler} type="email" lable={"ایمیل"} />
          <Input
            onchange={passwordChangeHandler}
            type="password"
            lable={"رمز عبور"}
          />
          <div className="font-bold w-12 mx-auto cursor-pointer rounded-full flex justify-center items-center bg-red-500 text-3xl  h-12 text-center ">
            G{" "}
          </div>
          <div className="flex justify-end mx-14">
            <button
              style={{ background: "#0d6efd" }}
              className="p-2 rounded-lg text-white"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
      {isLogin === true ? (
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">پیام</p>
          <p className="text-sm">شما با موفقیت وارد شدید</p>
        </div>
      ) : (
        <>
          <div
            className="bg-red-100 border px-14 border-red-400 text-red-700  py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">خطا در ورود</strong>
            <br />
            <span className="block sm:inline">
              در ورود به حساب کاربری به خطا خوردید.
              این موضوع میتواند با اشتباه بود ایمیل و یا رمز عبور شما مرتبط باشد.
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
        </>
      )}
    </>
  );
}
