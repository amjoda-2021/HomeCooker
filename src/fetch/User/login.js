import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const login = async ({
  event,
  authContext,
  authInformations,
  url,
  setAuth,
  navigate,
}) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(authInformations),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  if (!res.error) {
    setAuth(res.user);
    localStorage.setItem("auth", JSON.stringify(res.user));
    navigate("/profile");
    console.log(res);
    validationMessage(res.message);
  }
  if (res.error) {
    errorMessage(res.error);
  }
};

export default login;
