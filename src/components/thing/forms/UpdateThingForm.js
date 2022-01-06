import updateOneThing from "../../../fetch/Thing/updateOneThing";
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
        Name:
        <input
          type="text"
          name="name"
          value={thing.name}
          onChange={(event) => setThing({ ...thing, name: event.target.value })}
        />
        <br />
        Description:
        <input
          type="text"
          name="description"
          value={thing.description}
          onChange={(event) =>
            setThing({ ...thing, description: event.target.value })
          }
        />
        <br />
        EN STOCK: OUI{" "}
        <input
          type="radio"
          id="true"
          name="inStock"
          value={true}
          checked={thing.inStock ? true : false}
          onChange={() => setThing({ ...thing, inStock: true })}
        />
        NON
        <input
          type="radio"
          id="false"
          name="inStock"
          value={false}
          checked={thing.inStock ? false : true}
          onChange={() => setThing({ ...thing, inStock: false })}
        />
        <br />
        Price:
        <input
          type="number"
          name="price"
          value={thing.price}
          onChange={(event) =>
            setThing({ ...thing, price: event.target.value })
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
              updateOneThing(event, authContext, thingId, thing, setImageUrl, url)
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
