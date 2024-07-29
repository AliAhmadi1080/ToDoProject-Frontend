import { useContext } from "react";
import userInfoContext from "../contexts/UserInfoContext";
import NavbarItem from "./NavbarItem";
import NavbarProfile from "./NavbarProfile";

export default function Navbar() {
  const userInfo = useContext(userInfoContext).user;

  return (
    <div className="flex justify-start border border-black rounded-xl">
      {userInfo.isauth ? (
        <>
          <NavbarProfile />
          <NavbarItem text="خانه" />
          <NavbarItem text="درباره" />
          <NavbarItem
            text={
              <p className=" text-2xl mr-[15rem] cursor-auto">
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
              <p className=" text-2xl mr-[15rem]">
                تسک‌های امروز، موفقیت‌های فردا
              </p>
            }
          />
        </>
      )}
    </div>
  );
}
