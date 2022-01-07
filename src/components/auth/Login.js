import login from "../../fetch/User/login";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";
import updatePassword from "../../fetch/User/updatePassword";
import "../../App.css";
import classes from "./Auth.module.css";
const Login = ({ setAuth }) => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });
  const [update, toUpdate] = useState(false);

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
          <label for="password">Password:</label>
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
          <button
            onClick={(event) =>
              login({ event, authContext, authInformations, url, setAuth })
            }
          >
            Se connecter
          </button>
          <button onClick={() => toUpdate(true)}>Mot de passe oublié ?</button>
        </>
      ) : (
        <>
          <h3>Mot de passe oublié </h3>
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
          <button
            onClick={(event) =>
              updatePassword({ event, authInformations, url })
            }
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
