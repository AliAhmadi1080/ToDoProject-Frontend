import { useContext } from "react";
import userInfoContext from "../contexts/UserInfoContext";
import NavbarItem from "./NavbarItem";


export default function Navbar() {
  const userInfo = useContext(userInfoContext).user;

  return (
    <div className="flex justify-start border  rounded-xl">
      {userInfo.isauth ? (
        <>
          <NavbarItem text="خانه" />
          <NavbarItem
            text={
              <>

              </>
            }
          />
          <NavbarItem
            text={
              <p className=" text-2xl cursor-auto">
                تسک‌های امروز، موفقیت‌های فردا
              </p>
            }
          />
        </>
      ) : (
        <>
          <NavbarItem text="ورود" />
          <NavbarItem text="ثبت نام" />
          <NavbarItem text="خانه" />
          <NavbarItem text="درباره" />
          <NavbarItem
            text={
              <p className=" text-2xl mr-[10rem]  cursor-auto">
                تسک‌های امروز، موفقیت‌های فردا
              </p>
            }
          />
        </>
      )}
    </div>
  );
}
