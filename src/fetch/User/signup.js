import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const signup = async ({ event, authInformations, url, navigate }) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(authInformations),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  if (res.error) {
    errorMessage(res.error);
  }
  if (res.message) {
    validationMessage(res.message);
  }
};

export default signup;
