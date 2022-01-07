const login = async ({
  event,
  authContext,
  authInformations,
  url,
  setAuth,
}) => {
  event.preventDefault();
  const response = await fetch(`${url}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(authInformations),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();
  console.log(res);
  if (!res.error) {
    setAuth(res);
    localStorage.setItem("auth", JSON.stringify(res));
    console.log(document.getElementById("message").innerHTML);
    document.getElementById(
      "message"
    ).innerHTML = `<p>Connexion réussie !</p> <small>Contents de vous retrouver ${authInformations.email} &#128522;</small>`;
    setTimeout(() => (document.getElementById("message").innerHTML = ""), 2500);

    console.log(document.getElementById("message").innerHTML);
  }
  if (res.error) {
    console.log(document.getElementById("message").innerHTML);
    document.getElementById(
      "message"
    ).innerHTML = `<p>Identifiants incorrects &#128533;</p>`;
    setTimeout(() => (document.getElementById("message").innerHTML = ""), 2500);

    console.log(document.getElementById("message").innerHTML);
  }
};

export default login;
