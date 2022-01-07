const updateEmail = async ({ url, auth, newemail }) => {
  const { userId, email } = auth;
  console.log(userId, email, newemail, auth.token);
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
  console.log(res);
};
export default updateEmail;
