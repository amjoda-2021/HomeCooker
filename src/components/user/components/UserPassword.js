import classes from "../Profile.module.css";
import changePassword from "../../../fetch/User/changePassword";
const UserPassword = ({
  updatePassword,
  setPassword,
  password,
  toUpdatePassword,
  auth,
  url,
}) => {
  return (
    <>
      <span className={classes.email}>
        <label className={classes.passwordDisplay}>Password &#128272;</label>

        {updatePassword ? (
          <>
            <p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </p>
            <span className={classes.buttonsdisplay}>
              <button
                onClick={(event) => {
                  changePassword({
                    event,
                    auth,
                    url,
                    password,
                    toUpdatePassword,
                  });
                }}
              >
                Valider
              </button>{" "}
              <button
                onClick={() => {
                  toUpdatePassword(false);
                }}
              >
                Retour
              </button>
            </span>
          </>
        ) : (
          <>
            <p className={classes.passwordDisplay}>********</p>
            <button onClick={() => toUpdatePassword(true)}>Modifier</button>
          </>
        )}
      </span>
    </>
  );
};
export default UserPassword;
