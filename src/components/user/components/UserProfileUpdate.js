import postInformations from "../../../fetch/UserProfile/postOneThing";
import updateInformations from "../../../fetch/UserProfile/updateOneThing";
import { useContext } from "react";
import AuthContext from "../../../store/auth";
import Config from "../../../store/config";
import classes from "./UserProfile.module.css";
const UserProfileUpdate = ({ toUpdate, create, setUserProfile }) => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  return (
    <>
      <form
        action="api/stuff"
        id="formtest"
        name="formtest"
        encType="multipart/form-data"
      >
        <div className={classes.information}>
          <label for="firstName">Prénom:</label>
          <input type="text" name="firstName" />
        </div>
        <div className={classes.information}>
          <label for="lastName">Nom:</label>
          <input type="text" name="lastName" />
        </div>

        <div className={classes.information}>
          <label for="city">Ville:</label>
          <input type="text" name="city" />
        </div>
        <div className={classes.information}>
          <label for="imageUrl">Avatar:</label>
          <input
            className={classes.fileInput}
            type="file"
            name="imageUrl"
            accept="image/*"
          />
        </div>
        <div className={classes.information}>
          <div className={classes.inputRadio}>
            <p>Je veux m'inscrire comme chef:</p>{" "}
            <span>
              OUI
              <input type="radio" id="true" name="isCook" value={true} />
            </span>
            <span>
              NON
              <input
                type="radio"
                id="false"
                name="isCook"
                value={false}
                defaultChecked
              />
            </span>
          </div>
        </div>
      </form>
      <div>
        <button
          onClick={(event) =>
            create
              ? postInformations({
                  event,
                  authContext,
                  url,
                  toUpdate,
                  setUserProfile,
                })
              : updateInformations({
                  event,
                  authContext,
                  url,
                  toUpdate,
                  setUserProfile,
                })
          }
        >
          Valider
        </button>
        <button onClick={() => toUpdate(false)}>Retour</button>
      </div>
    </>
  );
};
export default UserProfileUpdate;
