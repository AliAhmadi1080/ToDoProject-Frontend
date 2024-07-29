import { useContext } from "react";
import profile_image from "../assets/download.png";
import userInfoContext from "../contexts/UserInfoContext";

export default function NavbarProfile() {
  const userInfo = useContext(userInfoContext).user;
  return (
    <div className="flex pl-2 mr-3">
      <div className="">
        <img src={profile_image} width="50px" alt="avatar" className=" rounded-full" />
      </div>
      <p className="pr-2 my-6">{userInfo.username}</p>
    </div>
  );
}
