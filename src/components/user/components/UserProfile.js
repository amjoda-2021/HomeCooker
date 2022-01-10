import classes from "./UserProfile.module.css";
import UserProfileUpdate from "./UserProfileUpdate";
import { useState } from "react";
const UserProfile = ({ userProfile, navigate, setUserProfile }) => {
  const [update, toUpdate] = useState(false);
  return (
    <div className={classes.userProfile}>
      {userProfile ? (
        <>
          {!update ? (
            <>
              <div className={classes.information}>
                <label>Prénom:</label>
                <p>{userProfile.firstName}</p>
              </div>
              <div className={classes.information}>
                <label>Nom:</label>
                <p>{userProfile.lastName}</p>
              </div>
              <div className={classes.information}>
                <label>Ville:</label>
                <p>{userProfile.city}</p>
              </div>
              <div className={classes.information}>
                <label>Chef:</label>
                <p>{userProfile.isCook ? <>Cook</> : <>Client</>}</p>
              </div>

              <span className={classes.userInformations}>
                <button onClick={() => toUpdate(true)}>
                  Modifier mon profil
                </button>
              </span>
            </>
          ) : (
            <>
              <UserProfileUpdate
                toUpdate={toUpdate}
                setUserProfile={setUserProfile}
              />
            </>
          )}
        </>
      ) : (
        <>
          <>
            <div className={classes.userInformations}>
              {update ? (
                <UserProfileUpdate
                  toUpdate={toUpdate}
                  create={true}
                  setUserProfile={setUserProfile}
                />
              ) : (
                <p>Tu n'as pas encore renseigné tes informations.</p>
              )}
            </div>
            <span className={classes.userInformations}>
              <button onClick={() => toUpdate(true)}>
                Renseigner mon profil
              </button>
            </span>
          </>
        </>
      )}
    </div>
  );
};
export default UserProfile;
