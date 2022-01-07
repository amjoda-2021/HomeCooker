const updateOneThing = async (
  event,
  authContext,
  thingId,
  thing,
  setImageUrl,
  url
) => {
  event.preventDefault();
  const myForm = document.getElementById("formtest");
  var formData = new FormData(myForm);
  formData.append("userId", authContext.auth.userId);

  let objectTest = {};
  for (var [key, value] of formData.entries()) {
    console.log(key, value);
    objectTest[`${key}`] = value;
  }
  let object = thing ? { ...thing } : { Thing: objectTest };
  const response = await fetch(`${url}/api/userProfile/${thingId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
    body: formData,
    object,
  });
  const res = await response.json();
  console.log(res);
  return thing ? setImageUrl(res) : false;
};

export default updateOneThing;
