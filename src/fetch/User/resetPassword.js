const resetPassword = async ({ event, url, userId, resetToken, password }) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/password-reset/${userId}/${resetToken}`, {
    method: "POST",
    body: JSON.stringify({ password: password }),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  console.log(res);
};
export default resetPassword;
