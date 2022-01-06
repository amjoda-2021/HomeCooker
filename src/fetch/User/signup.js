const signup = async ({ event, authInformations, url }) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(authInformations),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  console.log(res);
};

export default signup;
