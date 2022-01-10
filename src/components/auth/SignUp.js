import signup from "../../fetch/User/signup";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";
import "../../App.css";
import classes from "./Auth.module.css";
import { useNavigate, Navigate } from "react-router-dom";
const SignUp = ({ auth }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });
  if (auth.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className={`App-child ${classes.form}`}>
      <h3>Inscription</h3>
      <label for="email">Email:</label>
      <input
        type="email"
        name="email"
        onChange={(event) =>
          setAuthInformations({
            ...authInformations,
            email: event.target.value,
          })
        }
      />
      <div id="message-email"></div>
      <label for="password">Mot de passe:</label>
      <input
        type="password"
        name="password"
        onChange={(event) =>
          setAuthInformations({
            ...authInformations,
            password: event.target.value,
          })
        }
      />
      <div id="message-password"></div>
      <button
        type="submit"
        onClick={(event) =>
          signup({ event, authContext, authInformations, url, navigate })
        }
      >
        S'inscrire
      </button>
    </div>
  );
};
export default SignUp;
