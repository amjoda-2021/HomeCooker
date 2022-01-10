import classes from "../auth/Auth.module.css";
const errorMessage = (error) => {
  if (error) {
    if (error.email || error.password) {
      error.email
        ? (document.getElementById(
            "message-email"
          ).innerHTML = `<small class=${classes.errorMessage}>❗ ${error.email} ❗</small>`)
        : (document.getElementById(
            "message-password"
          ).innerHTML = `<small class=${classes.errorMessage}>❗ ${error.password} ❗ </small>`);
      setTimeout(
        () => (document.getElementById("message-email").innerHTML = ""),
        2500
      );
      setTimeout(
        () => (document.getElementById("message-password").innerHTML = ""),
        2500
      );
    } else {
      document.getElementById("message").classList.add(`${classes.error}`);
      document.getElementById(
        "message"
      ).innerHTML = `<p class=${classes.errorMessage}><small>${error} <span>&#128533;</span></small></p>`;
      setTimeout(() => {
        document.getElementById("message").innerHTML = "";
        document.getElementById("message").classList.remove(`${classes.error}`);
      }, 2500);
    }
  }
};

export default errorMessage;
