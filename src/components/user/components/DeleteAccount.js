import deleteAccount from "../../../fetch/User/deleteAccount";
import Modal from "../../modal/Modal";
import classes from "../Profile.module.css";
const DeleteAccount = ({
  setDisplayAlert,
  displayAlert,
  url,
  auth,
  navigate,
  signOut,
}) => {
  return (
    <>
      <span className={classes.deleteAccount}>
        {displayAlert && (
          <Modal
            className={classes.deleteAccount}
            setDisplayAlert={setDisplayAlert}
          >
            <>
              <h4>Veux-tu vraiment supprimer ton compte ? </h4>
              <p>
                <strong>Cette action est définitive. </strong>
              </p>
              <p>
                Toutes les informations associées à ton utilisateur ainsi que
                tes identifiants seront supprimés définitivement.
              </p>
            </>
            <div className={classes.deleteAccount}>
              <>
                <button
                  className={classes.noDeleteAccount}
                  onClick={() => setDisplayAlert(false)}
                >
                  Je me suis trompé(e)
                  <br />
                  &#128064;
                </button>
              </>
              <>
                <button
                  onClick={() =>
                    deleteAccount({ url, auth, navigate, signOut })
                  }
                >
                  Je souhaite supprimer définitivement mon compte
                  <br />
                  &#128075;
                </button>
              </>
            </div>
          </Modal>
        )}
        <span className={classes.deleteAccountTest}>
          <button onClick={() => setDisplayAlert(true)}>
            Supprimer mon compte
          </button>
        </span>
      </span>
    </>
  );
};
export default DeleteAccount;
