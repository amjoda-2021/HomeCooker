import {
  validationMessage,
  errorMessage,
} from "../../components/messages/messages";
const updateOneThing = async ({
  event,
  authContext,
  thing,
  setImageUrl,
  url,
  toUpdate,
  setUserProfile,
}) => {
  console.log(authContext.auth.token, "caca");
  event.preventDefault();
  const myForm = document.getElementById("formtest");
  var formData = new FormData(myForm);
  formData.append("userId", authContext.auth.userId);

  let objectTest = {};
  for (var [key, value] of formData.entries()) {
    objectTest[`${key}`] = value;
  }
  let object = { object: objectTest };
  const response = await fetch(
    `${url}/api/userProfile/${authContext.auth.userId}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authContext.auth.token}`,
      },
      body: formData,
      object,
    }
  );
  const res = await response.json();
  if (res.message) {
    toUpdate(false);
    setUserProfile(res.userProfile);
    validationMessage(res.message);
  }
  if (res.error) {
    errorMessage(res.error);
  }
};

export default updateOneThing;
