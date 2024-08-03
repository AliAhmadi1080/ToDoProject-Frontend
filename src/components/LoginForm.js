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
              onClick={() => {
                console.log("you think submited");
              }}
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
      {isLogin ? (
        <div
          className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
          role="alert"
        >
          <p className="font-bold">پیام</p>
          <p className="text-sm">شما با موفقیت وارد شدید</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
