import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const deleteAccount = async ({ url, auth, navigate, signOut }) => {
  const response = await fetch(
    `${url}/api/auth/delete-account/${auth.userId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }
  );
  const res = await response.json();
  if (!res.error) {
    signOut();
    navigate("/signin");
    validationMessage(res.message);
  }
  if (res.error) {
    errorMessage(res.error);
  }
};
export default deleteAccount;
