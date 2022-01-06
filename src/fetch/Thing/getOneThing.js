const getOneThing = async ({ authContext, thingId, setThing, url }) => {
  const response = await fetch(`${url}/api/stuff/${thingId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
  });
  const res = await response.json();
  console.log(res);
  setThing(res);
};

export default getOneThing;
