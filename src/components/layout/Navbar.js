import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
const Navbar = ({ signOut, auth }) => {
  return (
    <>
      <div className={classes.navbar}>
        <Link to="/" className={classes.title}>
          HomeCooker
        </Link>
        {auth.token ? (
          <>
            <Link to="/profile">Profile</Link>
            <a href="/signin" onClick={signOut}>
              Deconnexion
            </a>
          </>
        ) : (
          <>
            <Link to="/signin">Connexion</Link>
            <Link to="/signup">S'inscrire</Link>
          </>
        )}
      </div>
      <div id="message" className={classes.message}></div>
    </>
  );
};
export default Navbar;
