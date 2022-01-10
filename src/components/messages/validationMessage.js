import classes from "../auth/Auth.module.css";
const validationMessage = (message) => {
  console.log(message);
  if (message)
    document.getElementById("message").classList.add(`${classes.validation}`);
  document.getElementById("message").innerHTML = `<p>${message}</p>`;
  setTimeout(() => {
    document.getElementById("message").innerHTML = "";
    document
      .getElementById("message")
      .classList.remove(`${classes.validation}`);
  }, 6000);
};

export default validationMessage;
