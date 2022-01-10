import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const confirmEmail = async ({ url, userId, resetToken, auth, navigate }) => {
  const response = await fetch(
    `${url}/api/auth/confirm-email/${userId}/${resetToken}`,
    {
      method: "POST",
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
  navigate("/signin");
};
export default confirmEmail;
