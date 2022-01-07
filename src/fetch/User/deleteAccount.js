const deleteAccount = async ({ url, auth }) => {
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
  console.log(res);
};
export default deleteAccount;
