import postInformations from "../../../fetch/Thing/postOneThing";
import { useContext } from "react";
import AuthContext from "../../../store/auth";
import Config from "../../../store/config";
const CreateThingForm = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext);
  const url = useContext(Config).urlAPI;
  console.log(url);
  return (
    <>
      <form
        action="api/stuff"
        id="formtest"
        name="formtest"
        encType="multipart/form-data"
      >
        Name:
        <input type="text" name="name" />
        <br />
        Description:
        <input type="text" name="description" />
        <br />
        EN STOCK: OUI{" "}
        <input type="radio" id="true" name="inStock" value={true} />
        NON
        <input
          type="radio"
          id="false"
          name="inStock"
          value={false}
          defaultChecked
        />
        <br />
        Price:
        <input type="number" name="price" />
        <br />
        ImageURL :
        <input type="file" name="imageUrl" accept="image/*" />
      </form>
      <button onClick={(event) => postInformations(event, authContext, url)}>
        Submit
      </button>
    </>
  );
};
export default CreateThingForm;
