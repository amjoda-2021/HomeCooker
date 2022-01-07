import { Link } from "react-router-dom";
import isLogin from "../utils/isLogin";
import classes from "./Navbar.module.css";
const Navbar = ({ signOut, auth }) => {
  console.log(auth);
  return (
    <>
      <div className={classes.navbar}>
        Navbar
        <Link to="/">Home</Link>
        <Link to="/things">Things</Link>
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
