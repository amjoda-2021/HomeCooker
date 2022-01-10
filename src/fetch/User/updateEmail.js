import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const updateEmail = async ({ url, auth, newemail, toUpdate, setAuth }) => {
  const { userId, email } = auth;
  const response = await fetch(`${url}/api/auth/changeEmail`, {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      email: email,
      newemail: newemail,
    }),
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
    toUpdate(false);
    setAuth({ ...auth, email: newemail });
  }
};
export default updateEmail;
