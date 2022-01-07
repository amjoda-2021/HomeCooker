const getOneThing = async ({ auth, url, setUserProfile }) => {
  const response = await fetch(`${url}/api/userProfile/${auth.userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  });
  const res = await response.json();
  setUserProfile(res);
};

export default getOneThing;
