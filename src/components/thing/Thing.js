import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../store/auth";
import getOneThing from "../../fetch/Thing/getOneThing";
import UpdateThingForm from "./forms/UpdateThingForm";
import deleteOneThing from "./../../fetch/Thing/deleteOneThing";
import { useNavigate } from "react-router-dom";
import Config from "../../store/config";
const Thing = () => {
  const navigate = useNavigate();
  const url = useContext(Config).urlAPI;
  const authContext = useContext(AuthContext);
  const [thing, setThing] = useState({});
  const { thingId } = useParams();
  const [update, setUpdate] = useState(false);
  useEffect(
    () => getOneThing({ authContext, thingId, setThing, url }),
    [update, authContext, thingId]
  );
  console.log(thing);
  return (
    <>
      COUCOU
      {!update ? (
        <>
          {thing.name}
          {thing.description}
          {thing.inStock}
          {thing.price}
          <img src={thing.imageUrl} alt="" />
          {authContext.auth.userId === thing.userId ? (
            <button onClick={() => setUpdate(true)}>Modifier</button>
          ) : (
            false
          )}
        </>
      ) : (
        <UpdateThingForm
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
