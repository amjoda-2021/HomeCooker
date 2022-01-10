import classes from "../Profile.module.css";
import updateEmail from "../../../fetch/User/updateEmail";
import VerifyEmail from "./VerifyEmail";
const UserEmail = ({
  toUpdate,
  update,
  user,
  auth,
  setAuth,
  email,
  setEmail,
  url,
}) => {
  return (
    <span className={classes.emailSection}>
      <span className={classes.email}>
        <label className={classes.emailLabel}>Email:</label>
        {!update ? (
          <>
            <p className={classes.emailDisplay}>
              {auth.email}
              <VerifyEmail user={user} />
            </p>
            <button onClick={() => toUpdate(true)}>Modifier</button>
          </>
        ) : (
          <>
            <p>
              <input
                type="email"
                name="email"
                value={email}
                className={classes.emailInput}
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <span className={classes.buttonsdisplay}>
              <button
                onClick={() => {
                  updateEmail({
                    url,
                    auth,
                    newemail: email,
                    toUpdate,
                    setEmail,
                    setAuth,
                  });
                }}
              >
                Valider
              </button>
              <button
                onClick={() => {
                  setEmail(auth.email);
                  toUpdate(false);
                }}
              >
                Retour
              </button>
            </span>
          </>
        )}
      </span>
      <span className={classes.displayMessages}>
        <span id="message-email" className={classes.emailMessage}></span>
        <span id="verifyEmailChild" className={classes.verifyEmailChild}></span>
      </span>
    </span>
  );
};
export default UserEmail;
