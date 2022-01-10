import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const resetPassword = async ({
  event,
  url,
  userId,
  resetToken,
  password,
  navigate,
}) => {
  event.preventDefault();
  const response = await fetch(
    `${url}/api/auth/password-reset/${userId}/${resetToken}`,
    {
      method: "POST",
      body: JSON.stringify({ password: password }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const res = await response.json();
  if (res.error) {
    errorMessage(res.error);
  }
  if (res.message) {
    validationMessage(res.message);
  }
};
export default resetPassword;
