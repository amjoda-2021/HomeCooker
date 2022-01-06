import login from "../../fetch/User/login";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";

const Login = ({setAuth}) => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });

  return (
    <>
      LOGIN FORM 
      Email:
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
      Password:
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
      <button onClick={(event) => login({event, authContext, authInformations, url, setAuth})}>
        Se connecter
      </button>
    </>
  );
};
export default Login;
