import Input from "./Input";

export default function LoginForm() {
  return (
    <>
      <div className="pb-5 mt-[8rem] shadow-xl">
        <Input lable={"ایمیل"} />
        <Input lable={"رمز عبور"} />
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
      </div>
    </>
  );
}
