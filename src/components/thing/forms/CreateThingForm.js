import postInformations from "../../../fetch/UserProfile/postOneThing";
import { useContext } from "react";
import AuthContext from "../../../store/auth";
import Config from "../../../store/config";
const CreateThingForm = () => {
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
        FirstName:
        <input type="text" name="firstName" />
        <br />
        LastName:
        <input type="text" name="lastName" />
        <br />
        Cook: OUI <input type="radio" id="true" name="isCook" value={true} />
        NON
        <input
          type="radio"
          id="false"
          name="isCook"
          value={false}
          defaultChecked
        />
        <br />
        City:
        <input type="text" name="city" />
        <br />
        Avatar :
        <input type="file" name="imageUrl" accept="image/*" />
      </form>
      <button onClick={(event) => postInformations(event, authContext, url)}>
        Submit
      </button>
    </>
  );
};
export default CreateThingForm;
