const login = async ({event, authContext, authInformations,url, setAuth}) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(authInformations),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  setAuth(res);
  localStorage.setItem("auth", JSON.stringify(res));
};

export default login;
