const updatePassword = async ({ event, authInformations, url }) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/changePassword`, {
    method: "POST",
    body: JSON.stringify({ email: authInformations.email }),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  console.log(res);
};
export default updatePassword;
