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
                      position: "absolute",
                      backgroundColor: "#f1f1f1",
                      minWidth: "160px",
                      overflow: "auto",
                      zIndex: "1",
                    }}
                    className=" shadow-xl flex"
                  >
                    <div className="flex flex-col mx-2 px-2 border-l-2">
                      <Link to={`/todo/create`}>
                        <div>ایجاد todo</div>
                      </Link>
                      <Link to={`/todo/`}>
                        <div>مشاهده todo ها</div>
                      </Link>
                    </div>
                    <div className="flex flex-col mx-2 px-2 border-l-2">
                      <Link to={`/tag/create`}>
                        <div>ایجاد تگ</div>
                      </Link>
                      <Link to={`/todo/`}>
                        <div>مشاهده تگ ها</div>
                      </Link>
                    </div>
                    <div className="flex flex-col mx-2 px-2 border-l-2">
                      <Link to={`/status/create`}>
                        <div>ایجاد وضعیت</div>
                      </Link>
                      <Link to={`/status`}>
                        <div>مشاهده وضعیت ها</div>
                      </Link>
                    </div>
                    <div className="flex flex-col mx-2 px-2">
                    <Link to={`/todolist/create`}>
                        <div>ایجاد لیست todo</div>
                      </Link>
                      <Link to={`/todolist`}>
                        <div>مشاهده لیست todo ها</div>
                      </Link>
                      
                    </div>
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
