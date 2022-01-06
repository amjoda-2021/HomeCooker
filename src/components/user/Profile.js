import { useState } from "react";
import updateEmail from "../../fetch/User/updateEmail";

const Profile = ({ auth }) => {
  console.log(auth.email);
  const [update, toUpdate] = useState(false);
  const [email, setEmail] = useState(auth.email);
  return (
    <>
      Profile:
      {update ? (
        <>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button onClick={updateEmail}>Valider</button>
        </>
      ) : (
        <>
          {auth.email}
          <button onClick={() => toUpdate(true)}>Modifier</button>
        </>
      )}
    </>
  );
};
export default Profile;
