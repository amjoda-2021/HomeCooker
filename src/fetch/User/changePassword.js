import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const changePassword = async ({
  event,
  auth,
  url,
  password,
  toUpdatePassword,
}) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/changePasswordAuth`, {
    method: "POST",
    body: JSON.stringify({ email: auth.email, password: password }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
  });
  const res = await response.json();
  if (res.error) {
    errorMessage(res.error);
  }
  if (res.message) {
    validationMessage(res.message);
    toUpdatePassword(false);
  }
};
export default changePassword;
