const changePassword = async ({ event, auth, url, password }) => {
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
  console.log(res);
};
export default changePassword;
