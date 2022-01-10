const deleteOneThing = async ({ authContext, thingId, url }) => {
  const response = await fetch(`${url}/api/userProfile/${thingId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authContext.auth.token}`,
    },
  });
  const res = await response.json();
};

export default deleteOneThing;
