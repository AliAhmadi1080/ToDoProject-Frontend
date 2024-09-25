import { useContext, useState } from "react";
import userInfoContext from "../contexts/UserInfoContext";
import NavbarItem from "./NavbarItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const userInfo = useContext(userInfoContext).user;
  const [showToDoItems, setShowToDoItems] = useState(false);

  return (
    <div className="flex justify-start border rounded-xl">
      {userInfo.isauth ? (
        <>
          <NavbarItem text="خانه" />
          <NavbarItem
            text={
              <div
                onMouseOver={() => {
                  setShowToDoItems(true);
                }}
                onMouseOut={() => {
                  setShowToDoItems(false);
                }}
              >
                <p>todo ها</p>
                {showToDoItems ? (
                  <div
                    id="myDropdown"
                    style={{
                      display: "block",
                      position: "absolute",
                      backgroundColor: "#f1f1f1",
                      minWidth: "160px",
                      overflow: "auto",
                      zIndex: "1",
                    }}
                    className=" shadow-xl flex flex-col"
                  >
                    <Link to={`/todo/create`}>
                      <div className="block">ایجاد todo</div>
                    </Link>
                    <Link to={`/tag/create`}>
                      <div className="block">ایجاد تگ</div>
                    </Link>
                    <Link to={`/status/create`}>
                      <div className="block">ایجاد وضعیت</div>
                    </Link>
                    <Link to={`/todolist/create`}>
                      <div className="block">ایجاد لیست todo</div>
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
              </div>
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
