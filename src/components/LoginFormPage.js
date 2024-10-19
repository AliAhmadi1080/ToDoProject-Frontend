import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";
import myImage from "../assets/nature-vertical-yefjvpp5yr2mwqjq.jpg";
import Navbar from "./Navbar";

export default function LoginFormPage(props) {
  return (
    <>
      <div dir="ltr" className="flex justify-between">
        <LoginFormImage />
        <div dir="rtl" className="w-full mr-[12rem] mt-10 max-w-[30%]">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
