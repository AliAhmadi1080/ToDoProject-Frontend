import { useNavigate } from "react-router-dom";

export default function useChangeAccessToken() {
  const navigate = useNavigate();
  const getAccessToken = async () => {
    const refresh = localStorage.getItem("refresh");
    const response = await fetch(
      "http://localhost:8000/api-auth/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh }),
      }
    );

    const data = await response.json();
    if (data["code"] === "token_not_valid") {
      localStorage.setItem("islogin", "false");
      navigate("/login");
    } else {
      localStorage.setItem("access", data["access"]);
    }
  };
  return [getAccessToken];
}
