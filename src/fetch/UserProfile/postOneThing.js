const postInformations = async ({ event, authContext, url, toUpdate }) => {
  event.preventDefault();
  const myForm = document.getElementById("formtest");
  var formData = new FormData(myForm);
  formData.append("userId", authContext.auth.userId);

  // FOR SEEING FORMDATA VALUES
  let objectTest = {};
  for (var [key, value] of formData.entries()) {
    objectTest[`${key}`] = value;
  }
  let object = { objectTest };
  const response = await fetch(`${url}/api/userProfile`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
    body: formData,
    object,
  });
  const res = await response.json();
  toUpdate(false);
};

export default postInformations;
