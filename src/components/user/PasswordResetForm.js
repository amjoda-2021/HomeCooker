import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import resetPassword from "../../fetch/User/resetPassword";
import Config from "../../store/config";
const PasswordResetForm = () => {
  const { userId, resetToken } = useParams();
  console.log(userId, resetToken);
  const url = useContext(Config).urlAPI;
  const [password, setPassword] = useState();
  return (
    <>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        onClick={(event) =>
          resetPassword({ event, userId, resetToken, password, url })
        }
      >
        Valider le nouveau mot de passe
      </button>
    </>
  );
};
export default PasswordResetForm;
