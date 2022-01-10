const getInformations = async (authContext, setThings, url) => {
  const response = await fetch(`${url}/api/userProfile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
  });
  const res = await response.json();
  setThings(res);
};

export default getInformations;
