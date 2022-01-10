import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import resetPassword from "../../fetch/User/resetPassword";
import Config from "../../store/config";
import "../../App.css";
import classes from "../auth/Auth.module.css";
const PasswordResetForm = () => {
  const navigate = useNavigate();
  const { userId, resetToken } = useParams();
  const url = useContext(Config).urlAPI;
  const [password, setPassword] = useState();
  return (
    <div className={`App-child ${classes.form}`}>
      <>
        <h3>Réinitalise ton mot de passe </h3>
        <label for="password">Mot de passe:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <div id="message-password"></div>
        <button
          onClick={(event) =>
            resetPassword({
              event,
              userId,
              resetToken,
              password,
              url,
              navigate,
            })
          }
        >
          Valider le nouveau mot de passe
        </button>
      </>
    </div>
  );
};
export default PasswordResetForm;
