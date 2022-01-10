import classes from "../../auth/Auth.module.css";
const VerifyEmail = ({ user }) => {
  const verifyEmail = ({ verify, leave }) => {
    if (leave) {
      if (verify) {
        document
          .getElementById("message")
          .classList.remove(`${classes.validation}`);
        document.getElementById("message").innerHTML = "";
      } else {
        document.getElementById("message").classList.remove(`${classes.error}`);
        document.getElementById("message").innerHTML = "";
      }
    } else {
      if (verify) {
        document
          .getElementById("message")
          .classList.add(`${classes.validation}`);
        document.getElementById(
          "message"
        ).innerHTML = `<p><small>&#9989; Votre email a bien été vérifié</small></p>`;
      } else {
        document.getElementById("message").classList.add(`${classes.error}`);
        document.getElementById(
          "message"
        ).innerHTML = `<p><small>&#10060; Votre email n'a pas été vérifié</small></p>`;
      }
    }
  };
  return (
    <>
      {user && user.isConfirmed ? (
        <>
          <p
            id="verifyEmail"
            className={classes.verifyEmail}
            onMouseEnter={() =>
              verifyEmail({ verify: user.isConfirmed, leave: false })
            }
            onMouseLeave={() =>
              verifyEmail({ verify: user.isConfirmed, leave: true })
            }
          >
            &#9989;
          </p>
        </>
      ) : (
        <div
          id="verifyEmail"
          onMouseEnter={() =>
            verifyEmail({ verify: user.isConfirmed, leave: false })
          }
          onMouseLeave={() =>
            verifyEmail({ verify: user.isConfirmed, leave: true })
          }
        >
          &#10060;
        </div>
      )}
    </>
  );
};
export default VerifyEmail;
