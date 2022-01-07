import updateOneThing from "../../../fetch/UserProfile/updateOneThing";
import { useContext } from "react";
import AuthContext from "../../../store/auth";
import { useState } from "react/cjs/react.development";
import Config from "../../../store/config";
const UpdateThingForm = ({ thingId, thing, setThing, setUpdate }) => {
  const authContext = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(thing.imageUrl || false);
  const url = useContext(Config).urlAPI;
  return (
    <>
      <form
        action="api/stuff"
        id="formtest"
        name="formtest"
        encType="multipart/form-data"
      >
        FirstName:
        <input
          type="text"
          name="firstName"
          value={thing.name}
          onChange={(event) => setThing({ ...thing, firstName: event.target.value })}
        />
        <br />
        LastName:
        <input
          type="text"
          name="lastName"
          value={thing.description}
          onChange={(event) =>
            setThing({ ...thing, lastName: event.target.value })
          }
        />
        <br />
        Cook: OUI{" "}
        <input
          type="radio"
          id="true"
          name="isCook"
          value={true}
          checked={thing.inStock ? true : false}
          onChange={() => setThing({ ...thing, isCook: true })}
        />
        NON
        <input
          type="radio"
          id="false"
          name="isCook"
          value={false}
          checked={thing.inStock ? false : true}
          onChange={() => setThing({ ...thing, isCook: false })}
        />
        <br />
        City:
        <input
          type="text"
          name="city"
          value={thing.price}
          onChange={(event) =>
            setThing({ ...thing, city: event.target.value })
          }
        />
        <br />
        ImageURL :
        <img src={imageUrl} alt="" />
        <input
          type="file"
          name="imageUrl"
          accept="image/*"
          onChange={
            (event) =>
              updateOneThing(
                event,
                authContext,
                thingId,
                thing,
                setImageUrl,
                url
              )
            // setThing({ ...thing, imageUrl: event.target.value })
          }
        />
        <input
          type="submit"
          value="submit!"
          onClick={(event) => {
            updateOneThing(event, authContext, thingId, url);
            setUpdate(false);
          }}
        />
      </form>
    </>
  );
};
export default UpdateThingForm;
