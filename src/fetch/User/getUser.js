const getUser = async ({ auth, url, setUser, toUpdate }) => {
  const response = await fetch(`${url}/api/auth/user/${auth.userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  const res = await response.json();
  setUser(res);
  toUpdate(false);
};

export default getUser;
