import { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Config from "../../store/config";
import getOneThing from "../../fetch/UserProfile/getOneThing";
import classes from "./Profile.module.css";
import getUser from "../../fetch/User/getUser";
import UserEmail from "./components/UserEmail";
import UserPassword from "./components/UserPassword";
import DeleteAccount from "./components/DeleteAccount";
import UserProfile from "./components/UserProfile";
import defaultAvatar from "../../assets/images/user.png";
const Profile = ({ auth, setAuth, signOut }) => {
  const navigate = useNavigate();
  const url = useContext(Config).urlAPI;
  const [displayAlert, setDisplayAlert] = useState(false);
  const [update, toUpdate] = useState(false);
  const [updatePassword, toUpdatePassword] = useState(false);
  const [email, setEmail] = useState(auth.email);
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});
  const [userProfile, setUserProfile] = useState();
  useEffect(
    () => getOneThing({ url, auth, setUserProfile }),
    [url, auth, update]
  );
  useEffect(
    () => getUser({ url, auth, setUser, toUpdate }),
    [auth.email, auth, url]
  );

  if (!auth.token) return <Navigate to="/signin" />;
  return (
    <div className={`App-child`}>
      <div className={classes.accountInformations}>
        <div className={classes.avatar}>
          <img
            src={
              userProfile && userProfile.imageUrl
                ? userProfile.imageUrl
                : defaultAvatar
            }
            alt=""
          />
        </div>
        <h3 className={classes.accountTitle}>Tes informations</h3>
        <UserProfile
          userProfile={userProfile}
          navigate={navigate}
          setUserProfile={setUserProfile}
        />
      </div>
      <div className={classes.accountInformations}>
        <h3 className={classes.accountTitle}>Paramètres du compte</h3>

        <UserEmail
          toUpdate={toUpdate}
          update={update}
          user={user}
          auth={auth}
          setAuth={setAuth}
          email={email}
          setEmail={setEmail}
          url={url}
        />
        <UserPassword
          updatePassword={updatePassword}
          setPassword={setPassword}
          password={password}
          toUpdatePassword={toUpdatePassword}
          auth={auth}
          url={url}
        />
        <DeleteAccount
          setDisplayAlert={setDisplayAlert}
          displayAlert={displayAlert}
          url={url}
          auth={auth}
          navigate={navigate}
          signOut={signOut}
        />
      </div>
    </div>
  );
};
export default Profile;
