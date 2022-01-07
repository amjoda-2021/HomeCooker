import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import deleteAccount from "../../fetch/User/deleteAccount";
import updateEmail from "../../fetch/User/updateEmail";
import Config from "../../store/config";
import getOneThing from "../../fetch/UserProfile/getOneThing";
import changePassword from "../../fetch/User/changePassword";
import classes from "./Profile.module.css";
const Profile = ({ auth }) => {
  console.log(auth.email);
  const navigate = useNavigate();
  const url = useContext(Config).urlAPI;
  const [update, toUpdate] = useState(false);
  const [updatePassword, toUpdatePassword] = useState(false);
  const [email, setEmail] = useState(auth.email);
  const [password, setPassword] = useState();
  const [userProfile, setUserProfile] = useState();
  useEffect(() => getOneThing({ url, auth, setUserProfile }), []);

  return (
    <div className={classes.profile}>
      Profile:
      {update ? (
        <div>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            onClick={() => {
              updateEmail({ url, auth, newemail: email });
              toUpdate(false);
            }}
          >
            Valider
          </button>
        </div>
      ) : (
        <div>
          {auth.email}
          {console.log(auth)}
          {auth.isConfirmed ? <>Confirmé !</> : false}
          <button onClick={() => toUpdate(true)}>Modifier</button>
          {updatePassword ? (
            <>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button
                onClick={(event) => {
                  changePassword({ event, auth, url, password });
                  toUpdate(false);
                }}
              >
                Valider
              </button>
            </>
          ) : (
            <button onClick={() => toUpdatePassword(true)}>
              Changer mon mot de passe
            </button>
          )}

          <button onClick={() => deleteAccount({ url, auth })}>
            Supprimer mon compte
          </button>
        </div>
      )}
      {userProfile ? (
        <div>
          <>{userProfile.firstName}</>
          <>{userProfile.lastName}</>
          {userProfile.isCook ? <>Cook</> : <>Client</>}
          {userProfile.city}
          <img src={userProfile.imageUrl} alt="" />
        </div>
      ) : (
        <button onClick={() => navigate(`/things/creatething`)}>
          Renseigner mon profil
        </button>
      )}
    </div>
  );
};
export default Profile;
