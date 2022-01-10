import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../store/auth";
import getOneThing from "../../fetch/UserProfile/getOneThing";
import UpdateUserProfileForm from "./forms/UpdateUserProfileForm";
import deleteOneThing from "../../fetch/UserProfile/deleteOneThing";
import { useNavigate } from "react-router-dom";
import Config from "../../store/config";
const Thing = () => {
  const navigate = useNavigate();
  const url = useContext(Config).urlAPI;
  const authContext = useContext(AuthContext);
  const [thing, setThing] = useState({});
  const { thingId } = useParams();
  const [update, setUpdate] = useState(false);
  const [userProfile, setUserProfile] = useState();
  useEffect(() => getOneThing({ url, auth: authContext, setUserProfile }), []);

  return (
    <>
      COUCOU
      {!update ? (
        <>
          <>{userProfile.firstName}</>
          <>{userProfile.lastName}</>
          {userProfile.isCook ? <>Cook</> : <>Client</>}
          {userProfile.city}
          <img src={userProfile.imageUrl} alt="" />
          {authContext.auth.userId === thing.userId ? (
            <button onClick={() => setUpdate(true)}>Modifier</button>
          ) : (
            false
          )}
        </>
      ) : (
        <UpdateUserProfileForm
          thingId={thingId}
          thing={thing}
          setThing={setThing}
          setUpdate={setUpdate}
          imageUrl={thing.imageUrl}
        />
      )}
      {authContext.auth.userId === thing.userId ? (
        <button
          onClick={() => {
            deleteOneThing({ authContext, thingId, url });
            navigate("/things");
          }}
        >
          DELETE
        </button>
      ) : (
        false
      )}
    </>
  );
};
export default Thing;
