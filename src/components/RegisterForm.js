import { useState } from "react";
import Input from "./Input";

export default function RegisterForm() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [isSuccess, setIsSuccess] = useState(false);

  const createUser = async () => {
    if (
      typeof username === "undefined" ||
      typeof email === "undefined" ||
      typeof password === "undefined" ||
      typeof password2 === "undefined"
    ) {
      return;
    }
    console.log(username);
    const response = await fetch("http://localhost:8000/api-auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      setIsSuccess(true)
    } else {
      console.error(data.message);
    }
  };
  return (
    <>
      <div className="pb-5 mt-[8rem] shadow-xl">
        <Input
          onchange={(e) => {
            setUsername(e.target.value);
          }}
          lable={"نام کاربری"}
        />
        <Input
          onchange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          lable={"ایمیل"}
        />
        <Input
          onchange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          lable={"رمز عبور"}
        />
        <Input
          onchange={(e) => {
            setPassword2(e.target.value);
          }}
          type="password"
          lable={"تکرار رمز عبور"}
        />
        <div className="font-bold w-12 mx-auto cursor-pointer rounded-full flex justify-center items-center bg-red-500 text-3xl  h-12 text-center ">
          G
        </div>
        <div className="flex justify-end mx-14">
          <button
            style={{ background: "#0d6efd" }}
            className="p-2 rounded-lg text-white"
            onClick={() => {
              createUser();
            }}
          >
            ارسال
          </button>
        </div>
        {isSuccess ? (
          <>
            <div
              className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
              role="alert"
            >
              <p className="font-bold">پیام</p>
              <p className="text-sm">شما با موفقیت ثبت نام شدید</p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
