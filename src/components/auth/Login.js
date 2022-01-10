import login from "../../fetch/User/login";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";
import updatePassword from "../../fetch/User/updatePassword";
import "../../App.css";
import classes from "./Auth.module.css";
import { useNavigate, Navigate } from "react-router-dom";
const Login = ({ setAuth, updateInfo, auth }) => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });
  const [update, toUpdate] = useState(updateInfo || false);
  if (auth.token) {
    return <Navigate to="/" />;
  }
  return (
    <div className={`App-child ${classes.form}`}>
      {!update ? (
        <>
          <h3>Connexion</h3>
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
            onClick={(event) =>
              login({
                event,
                authContext,
                authInformations,
                url,
                setAuth,
                navigate,
              })
            }
          >
            Se connecter
          </button>
          <button onClick={() => toUpdate(true)}>Mot de passe oublié ?</button>
        </>
      ) : (
        <>
          <h3>Mot de passe oublié </h3>
          <small>
            Nous avons besoin de ton email de connexion pour t'envoyer le lien
            de réinitialisation
          </small>
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
          <button
            onClick={(event) => {
              updatePassword({ event, authInformations, url, navigate, toUpdate });
            }}
          >
            Confirmer
          </button>
          <button onClick={(event) => toUpdate(false)}>Retour</button>
        </>
      )}
    </div>
  );
};
export default Login;
