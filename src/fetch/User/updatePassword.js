import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const updatePassword = async ({
  event,
  authInformations,
  url,
  navigate,
  toUpdate,
}) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/changePassword`, {
    method: "POST",
    body: JSON.stringify({ email: authInformations.email }),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  if (res.error) {
    errorMessage(res.error);
    toUpdate(true);
  }
  if (res.message) {
    validationMessage(res.message);
    toUpdate(false);
    navigate("/signin");
  }
};
export default updatePassword;
