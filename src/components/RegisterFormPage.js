import RegisterForm from "./RegisterForm";
import RegisterFormImage from "./RegisterFormImage";
import Navbar from "./Navbar";

export default function RegisterFormPage(props) {
  return (
    <>
      <div dir="ltr" className="flex justify-between">
        <RegisterFormImage />
        <div dir="rtl" className="w-full mr-[12rem] mt-10 max-w-[30%]">
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
