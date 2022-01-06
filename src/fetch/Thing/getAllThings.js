const getInformations = async (authContext, setThings, url) => {
  console.log(authContext);
  const response = await fetch(`${url}/api/stuff`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
  });
  const res = await response.json();
  setThings(res);
  console.log(res);
};

export default getInformations;
