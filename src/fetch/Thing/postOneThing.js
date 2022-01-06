import { useState } from "react";

const postInformations = async (event, authContext, url) => {
  event.preventDefault();
  const myForm = document.getElementById("formtest");
  var formData = new FormData(myForm);
  formData.append("userId", authContext.auth.userId);

  // FOR SEEING FORMDATA VALUES
  let objectTest = {};
  for (var [key, value] of formData.entries()) {
    console.log(key, value);
    objectTest[`${key}`] = value;
  }
  let object = { objectTest };
  console.log(object);
  const response = await fetch(`${url}/api/stuff`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authContext.auth.token}`,
    },
    body: formData,
    object,
  });
  const res = await response.json();
  console.log(res);
};

export default postInformations;
