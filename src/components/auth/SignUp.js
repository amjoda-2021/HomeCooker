import signup from "../../fetch/User/signup";
import React, { useContext, useState } from "react";
import AuthContext from "../../store/auth";
import Config from "../../store/config";
const SignUp = () => {
  const authContext = useContext(AuthContext);
  const url = useContext(Config).urlAPI;
  const [authInformations, setAuthInformations] = useState({
    email: null,
    password: null,
  });
  return (
    <>
    <form>
      SIGNUP FORM Email:
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
      <button
        type="submit"
        onClick={(event) =>
          signup({ event, authContext, authInformations, url })
        }
      >
        S'inscrire
      </button>
      </form>
    </>
  );
};
export default SignUp;
