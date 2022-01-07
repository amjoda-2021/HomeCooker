const confirmEmail = async ({ url, userId, resetToken }) => {
  const response = await fetch(
    `${url}/api/auth/confirm-email/${userId}/${resetToken}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }
  );
  const res = await response.json();
  console.log(res);
};
export default confirmEmail;
