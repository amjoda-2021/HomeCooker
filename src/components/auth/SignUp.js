import signup from "../../fetch/User/signup";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";
import "../../App.css";
import classes from "./Auth.module.css";
const SignUp = () => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });
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
        type="submit"
        onClick={(event) =>
          signup({ event, authContext, authInformations, url })
        }
      >
        S'inscrire
      </button>
    </div>
  );
};
export default SignUp;
